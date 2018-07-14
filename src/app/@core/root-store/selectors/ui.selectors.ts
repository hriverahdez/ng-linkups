import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromUI from "../reducers/ui.reducers";

export const selectAppIsLoading = createSelector(
  fromFeature.selectUIState,
  fromUI.selectAppLoading
);

export const selectSecondarySidebarOpened = createSelector(
  fromFeature.selectUIState,
  fromUI.selectSecondarySidebarStatus
);
