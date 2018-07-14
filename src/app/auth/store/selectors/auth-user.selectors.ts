import { createSelector } from "@ngrx/store";

import * as fromUser from "../reducers/auth-user.reducer";
import * as fromFeature from "../reducers";
import { User } from "../../../@shared/models";

export const selectUserState = createSelector(
  fromFeature.selectAuthState,
  (state: fromFeature.AuthState) => state.currentUser
);

export const selectUserIsLoggedIn = createSelector(
  selectUserState,
  fromUser.isLoggedIn
);

export const selectCurrentUser = createSelector(
  selectUserState,
  fromUser.selectCurrentUser
);

export const selectAuthLoading = createSelector(
  selectUserState,
  fromUser.selectAuthLoading
);

export const selectAuthError = createSelector(
  selectUserState,
  fromUser.selectAuthError
);

export const selectUserSettings = createSelector(
  selectCurrentUser,
  (user: User) => user.settings
);
