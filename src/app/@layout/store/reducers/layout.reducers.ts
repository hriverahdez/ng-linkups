import * as fromLayout from "../actions";

export interface State {
  appLoading: boolean;
}

export const initialState: State = {
  appLoading: false
};

export function reducer(
  state = initialState,
  action: fromLayout.LayoutActions
) {
  switch (action.type) {
    case fromLayout.SHOW_LOADER: {
      return {
        ...state,
        appLoading: true
      };
    }

    case fromLayout.HIDE_LOADER: {
      return {
        ...state,
        appLoading: false
      };
    }
  }
  return state;
}

export const getAppLoading = (state: State) => state.appLoading;
