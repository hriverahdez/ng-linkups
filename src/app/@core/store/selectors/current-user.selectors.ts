import { createSelector } from "@ngrx/store";

import * as fromUser from "../reducers/current-user.reducer";
import * as fromRoot from "../reducers";
import { User } from "../../models/user.model";

export const getIsLoggedIn = createSelector(
  fromRoot.getUserState,
  fromUser.isLoggedIn
);

export const getCurrentUser = createSelector(
  fromRoot.getUserState,
  fromUser.getCurrentUser
);

export const getLoginLoading = createSelector(
  fromRoot.getUserState,
  fromUser.getLoading
);

export const getLoginError = createSelector(
  fromRoot.getUserState,
  fromUser.getError
);

export const getUserSettings = createSelector(
  getCurrentUser,
  (user: User) => user.settings
);
