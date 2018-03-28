import { Action } from "@ngrx/store";

// SHOW LOADER
export const SHOW_LOADER = "[Layout] Show Loader";

// HIDE LOADER
export const HIDE_LOADER = "[Layout] Hide Loader";

export class ShowLoader implements Action {
  readonly type = SHOW_LOADER;
}

export class HideLoader implements Action {
  readonly type = HIDE_LOADER;
}

// SECONDARY SIDEBAR
export const SHOW_SECONDARY_SIDEBAR = "[Layout] Show Secondary Sidebar";
export const HIDE_SECONDARY_SIDEBAR = "[Layout] Hide Secondary Sidebar";

export class ShowSecondarySidebar implements Action {
  readonly type = SHOW_SECONDARY_SIDEBAR;
}

export class HideSecondarySidebar implements Action {
  readonly type = HIDE_SECONDARY_SIDEBAR;
}

export type LayoutActions =
  | ShowLoader
  | HideLoader
  | ShowSecondarySidebar
  | HideSecondarySidebar;
