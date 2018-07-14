import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromUser from "./auth-user.reducer";

export interface AuthState {
  currentUser: fromUser.UserState;
}

export const reducers: ActionReducerMap<AuthState> = {
  currentUser: fromUser.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>("authState");
