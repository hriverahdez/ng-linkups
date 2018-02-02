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

export type LayoutActions = ShowLoader | HideLoader;
