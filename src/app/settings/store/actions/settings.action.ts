import { Action } from "@ngrx/store";
import { AppSettings } from "../../models/app-settings.model";

export const LOAD_APP_SETTINGS = "[Settings] Load App Settings";
export const LOAD_APP_SETTINGS_FAIL = "[Settings] Load App Settings Fail";
export const LOAD_APP_SETTINGS_SUCCESS = "[Settings] Load App Settings Success";

export class LoadAppSettings implements Action {
  readonly type = LOAD_APP_SETTINGS;
}

export class LoadAppSettingsFail implements Action {
  readonly type = LOAD_APP_SETTINGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadAppSettingsSuccess implements Action {
  readonly type = LOAD_APP_SETTINGS_SUCCESS;
  constructor(public payload: AppSettings) {}
}

export type AppSettingsActions =
  | LoadAppSettings
  | LoadAppSettingsFail
  | LoadAppSettingsSuccess;
