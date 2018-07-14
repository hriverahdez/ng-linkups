import * as fromAppSettings from "../actions";
import { AppSettings } from "../../../@shared/models";
import { CustomError } from "../../../@shared/models/custom-error.model";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";

export interface SettingsState {
  appSettings: AppSettings;
  loaded: boolean;
  loading: boolean;
  error: CustomError;
}

export const initialState: SettingsState = {
  appSettings: {},
  loaded: false,
  loading: false,
  error: {}
};

export function reducer(
  state = initialState,
  action: fromAppSettings.SettingsActions
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
      const appSettings = action.payload;
      return {
        ...state,
        appSettings,
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

export const selectAppSettings = (state: SettingsState) => state.appSettings;
export const selectAppSettingsLoaded = (state: SettingsState) => state.loaded;
export const selectAppSettingsLoading = (state: SettingsState) => state.loading;
export const selectAppSettingsError = (state: SettingsState) => state.error;
