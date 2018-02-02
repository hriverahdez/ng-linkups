import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";

import * as fromLayout from "./layout.reducers";

export interface LayoutState {
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<LayoutState> = {
  layout: fromLayout.reducer
};

export const getLayoutState = createFeatureSelector<LayoutState>("layout");
