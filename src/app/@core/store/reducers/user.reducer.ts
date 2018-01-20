import * as fromUser from "../actions";

export interface UserState {
  isLoggedIn: boolean;
  currentUser: any;
  loading: boolean;
}

export const initialState: UserState = {
  isLoggedIn: false,
  currentUser: {},
  loading: false
};

export function reducer(state = initialState, action: fromUser.UserActions) {
  switch (action.type) {
    case fromUser.LOGIN: {
      return {
        ...state,
        loading: true
      };
    }

    case fromUser.LOGIN_FAIL: {
      return {
        ...state,
        loading: false
      };
    }

    case fromUser.LOGIN_SUCCESS: {
      const currentUser = action.payload;
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        currentUser
      };
    }

    case fromUser.SET_USER: {
      const currentUser = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        currentUser
      };
    }
  }

  return state;
}

export const isLoggedIn = (state: UserState) => state.isLoggedIn;
export const getCurrentUser = (state: UserState) => state.currentUser;
export const getLoading = (state: UserState) => state.loading;
