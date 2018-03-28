import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromAppSettings from "../reducers/app-settings.reducer";
import { AppSettings } from "../../models/app-settings.model";

export const getAppSettingsState = createSelector(
  fromFeature.getSettingsState,
  (state: fromFeature.SettingsState) => state.appSettings
);

export const getAppSettings = createSelector(
  getAppSettingsState,
  fromAppSettings.getAppSettings
);

export const getAppSettingsError = createSelector(
  getAppSettingsState,
  fromAppSettings.getAppSettingsError
);

export const selectRegistrationEnabled = createSelector(
  getAppSettings,
  (settings: AppSettings) => settings.enableRegistration
);
