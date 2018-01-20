import { createSelector } from "@ngrx/store";

import * as fromUser from "../reducers/user.reducer";
import * as fromRoot from "../reducers";

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
