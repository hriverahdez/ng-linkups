import { createSelector } from "@ngrx/store";
import { toArray } from "../../../@shared/utils/entities-array-helper";

import * as fromFeature from "../reducers";
import * as fromCategories from "../reducers/categories.reducer";

export const getState = createSelector(
  fromFeature.getCategoriesState,
  (state: fromFeature.CategoriesState) => state.categories
);

export const getCategoriesEntities = createSelector(
  getState,
  fromCategories.getCategoriesEntities
);

export const getAllCategories = createSelector(getCategoriesEntities, toArray);
