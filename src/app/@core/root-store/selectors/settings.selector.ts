import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromAppSettings from "../reducers/settings.reducer";
import { AppSettings } from "../../../@shared/models";

export const selectAppSettings = createSelector(
  fromFeature.selectSettingsState,
  fromAppSettings.selectAppSettings
);

export const selectAppSettingsError = createSelector(
  fromFeature.selectSettingsState,
  fromAppSettings.selectAppSettingsError
);

export const selectRegistrationEnabled = createSelector(
  selectAppSettings,
  (settings: AppSettings) => settings.enableRegistration
);
