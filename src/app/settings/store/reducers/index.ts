import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";

import * as fromAppSettings from "./settings.reducer";

export interface SettingsState {
  appSettings: fromAppSettings.State;
}

export const reducers: ActionReducerMap<SettingsState> = {
  appSettings: fromAppSettings.reducer
};

export const getSettingsState = createFeatureSelector<SettingsState>(
  "settings"
);
