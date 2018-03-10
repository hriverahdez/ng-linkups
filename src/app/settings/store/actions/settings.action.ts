import { Action } from "@ngrx/store";
import { AppSettings } from "../../models/app-settings.model";

// LOAD
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

// SAVE
export const SAVE_APP_SETTINGS = "[Settings] Save App Settings";
export const SAVE_APP_SETTINGS_FAIL = "[Settings] Save App Settings Fail";
export const SAVE_APP_SETTINGS_SUCCESS = "[Settings] Save App Settings Success";

export class SaveAppSettings implements Action {
  readonly type = SAVE_APP_SETTINGS;
  constructor(public payload: AppSettings) {}
}

export class SaveAppSettingsFail implements Action {
  readonly type = SAVE_APP_SETTINGS_FAIL;
  constructor(public payload: any) {}
}

export class SaveAppSettingsSuccess implements Action {
  readonly type = SAVE_APP_SETTINGS_SUCCESS;
  constructor(public payload: AppSettings) {}
}

export type AppSettingsActions =
  | LoadAppSettings
  | LoadAppSettingsFail
  | LoadAppSettingsSuccess
  | SaveAppSettings
  | SaveAppSettingsFail
  | SaveAppSettingsSuccess;
