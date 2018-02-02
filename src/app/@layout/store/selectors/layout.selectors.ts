import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromLayout from "../reducers/layout.reducers";

export const getState = createSelector(
  fromFeature.getLayoutState,
  (state: fromFeature.LayoutState) => state.layout
);

export const getAppLoading = createSelector(getState, fromLayout.getAppLoading);
