import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromAppSettings from "../reducers/app-settings.reducer";

export const getAppSettingsState = createSelector(
  fromFeature.getSettingsState,
  (state: fromFeature.SettingsState) => state.appSettings
);

export const getAppSettings = createSelector(
  getAppSettingsState,
  fromAppSettings.getAppSettings
);
