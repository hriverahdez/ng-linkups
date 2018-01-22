import * as fromUser from "../actions";

import { CustomError } from "../../../@shared/utils/custom-error";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";

export interface UserState {
  isLoggedIn: boolean;
  currentUser: any;
  loading: boolean;
  error: CustomError;
}

export const initialState: UserState = {
  isLoggedIn: false,
  currentUser: {},
  loading: false,
  error: {}
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
      const { status } = action.payload;

      const error: CustomError = {
        code: status,
        message:
          status === 401 || status === 400
            ? "Usuario o contraseña incorrectos"
            : httpErrorMessages[status]
      };

      return {
        ...state,
        loading: false,
        error
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

    case fromUser.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {}
      };
    }
  }

  return state;
}

export const isLoggedIn = (state: UserState) => state.isLoggedIn;
export const getCurrentUser = (state: UserState) => state.currentUser;
export const getLoading = (state: UserState) => state.loading;
export const getError = (state: UserState) => state.error;
