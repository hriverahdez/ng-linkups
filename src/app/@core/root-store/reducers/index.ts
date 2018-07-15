import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromRouter from "@ngrx/router-store";

import {
  Params,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

import * as fromNotifications from "./notifications.reducer";
import * as fromSettings from "./settings.reducer";
import * as fromUI from "./ui.reducers";

export interface AppState {
  ui: fromUI.UIState;
  settings: fromSettings.SettingsState;
  notifications: fromNotifications.NotificationsState;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUI.reducer,
  settings: fromSettings.reducer,
  notifications: fromNotifications.reducer,
  routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>("routerReducer");

export const selectUIState = createFeatureSelector<fromUI.UIState>("ui");

export const selectSettingsState = createFeatureSelector<
  fromSettings.SettingsState
>("settings");

export const selectNotificationsState = createFeatureSelector<
  fromNotifications.NotificationsState
>("notifications");

// Router Serializer
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;
    return { url, queryParams, params };
  }
}
