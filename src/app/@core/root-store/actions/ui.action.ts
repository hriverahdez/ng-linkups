import { Action } from "@ngrx/store";

// SHOW LOADER
export const SHOW_LOADER = "[UI] Show Loader";

// HIDE LOADER
export const HIDE_LOADER = "[UI] Hide Loader";

export class ShowLoader implements Action {
  readonly type = SHOW_LOADER;
}

export class HideLoader implements Action {
  readonly type = HIDE_LOADER;
}

// SECONDARY SIDEBAR
export const SHOW_SECONDARY_SIDEBAR = "[UI] Show Secondary Sidebar";
export const HIDE_SECONDARY_SIDEBAR = "[UI] Hide Secondary Sidebar";

export class ShowSecondarySidebar implements Action {
  readonly type = SHOW_SECONDARY_SIDEBAR;
}

export class HideSecondarySidebar implements Action {
  readonly type = HIDE_SECONDARY_SIDEBAR;
}

export type UIActions =
  | ShowLoader
  | HideLoader
  | ShowSecondarySidebar
  | HideSecondarySidebar;
