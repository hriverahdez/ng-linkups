import { User } from "../../models/user.model";
import * as fromUser from "../actions";
import * as fromSettings from "../../../settings/store/actions";

import { CustomError } from "../../../@shared/utils/custom-error";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";

export interface UserState {
  isLoggedIn: boolean;
  userInfo: User;
  loading: boolean;
  error: CustomError;
}

export const initialState: UserState = {
  isLoggedIn: false,
  userInfo: {},
  loading: false,
  error: {}
};

export function reducer(
  state = initialState,
  action: fromUser.UserActions | fromSettings.SettingsActions
) {
  switch (action.type) {
    case fromUser.REGISTER:
    case fromSettings.SAVE_USER_SETTINGS:
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

    case fromUser.REGISTER_SUCCESS:
    case fromUser.LOGIN_SUCCESS: {
      const userInfo = action.payload;
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        userInfo
      };
    }

    case fromUser.SET_USER: {
      const userInfo = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        userInfo
      };
    }

    case fromUser.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        userInfo: {}
      };
    }

    case fromSettings.SAVE_USER_SETTINGS_SUCCESS: {
      const settings = action.payload;
      const userInfo = { ...state.userInfo, settings };
      return {
        ...state,
        userInfo,
        loading: false
      };
    }
  }

  return state;
}

export const isLoggedIn = (state: UserState) => state.isLoggedIn;
export const getCurrentUser = (state: UserState) => state.userInfo;
export const getLoading = (state: UserState) => state.loading;
export const getError = (state: UserState) => state.error;
