import * as fromLayout from "../actions";

export interface State {
  appLoading: boolean;
  secondarySidebarOpened: boolean;
}

export const initialState: State = {
  appLoading: false,
  secondarySidebarOpened: false
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

    case fromLayout.SHOW_SECONDARY_SIDEBAR: {
      return {
        ...state,
        secondarySidebarOpened: true
      };
    }

    case fromLayout.HIDE_SECONDARY_SIDEBAR: {
      return {
        ...state,
        secondarySidebarOpened: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getAppLoading = (state: State) => state.appLoading;
export const getSecondarySidebar = (state: State) =>
  state.secondarySidebarOpened;
