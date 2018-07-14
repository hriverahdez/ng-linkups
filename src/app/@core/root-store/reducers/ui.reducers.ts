import * as fromUI from "../actions/ui.action";

export interface UIState {
  appLoading: boolean;
  secondarySidebarStatus: boolean;
}

export const initialState: UIState = {
  appLoading: false,
  secondarySidebarStatus: false
};

export function reducer(state = initialState, action: fromUI.UIActions) {
  switch (action.type) {
    case fromUI.SHOW_LOADER: {
      return {
        ...state,
        appLoading: true
      };
    }

    case fromUI.HIDE_LOADER: {
      return {
        ...state,
        appLoading: false
      };
    }

    case fromUI.SHOW_SECONDARY_SIDEBAR: {
      return {
        ...state,
        secondarySidebarStatus: true
      };
    }

    case fromUI.HIDE_SECONDARY_SIDEBAR: {
      return {
        ...state,
        secondarySidebarStatus: false
      };
    }

    default: {
      return state;
    }
  }
}

export const selectAppLoading = (state: UIState) => state.appLoading;
export const selectSecondarySidebarStatus = (state: UIState) =>
  state.secondarySidebarStatus;
