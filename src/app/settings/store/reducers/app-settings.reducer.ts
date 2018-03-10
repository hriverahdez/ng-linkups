import * as fromAppSettings from "../actions";
import { AppSettings } from "../../models/app-settings.model";

import { CustomError } from "../../../@shared/utils/custom-error";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";

export interface State {
  settings: AppSettings;
  loaded: boolean;
  loading: boolean;
  error: CustomError;
}

export const initialState: State = {
  settings: {},
  loaded: false,
  loading: false,
  error: {}
};

export function reducer(
  state = initialState,
  action: fromAppSettings.AppSettingsActions
) {
  switch (action.type) {
    case fromAppSettings.LOAD_APP_SETTINGS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAppSettings.SAVE_APP_SETTINGS_FAIL:
    case fromAppSettings.LOAD_APP_SETTINGS_FAIL: {
      const { status } = action.payload;
      const error: CustomError = {
        code: status,
        message: httpErrorMessages[status]
      };
      return {
        ...state,
        loading: false,
        error
      };
    }

    case fromAppSettings.LOAD_APP_SETTINGS_SUCCESS: {
      const settings = action.payload;
      return {
        ...state,
        settings,
        loaded: true,
        loading: false
      };
    }

    case fromAppSettings.SAVE_APP_SETTINGS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromAppSettings.SAVE_APP_SETTINGS_SUCCESS: {
      const settings = action.payload;
      return {
        ...state,
        settings,
        loading: false
      };
    }
  }

  return state;
}

export const getAppSettings = (state: State) => state.settings;
export const getAppSettingsLoaded = (state: State) => state.loaded;
export const getAppSettingsLoading = (state: State) => state.loading;
export const getAppSettingsError = (state: State) => state.error;
