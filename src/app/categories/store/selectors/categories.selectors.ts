import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../@core/root-store";
import * as fromFeature from "../reducers";
import * as fromCategories from "../reducers/categories.reducer";
import { toArray } from "../../../@shared/utils/entities-array-helper";

export const getState = createSelector(
  fromFeature.getCategoriesState,
  (state: fromFeature.CategoriesState) => state.categories
);

export const getCategoriesEntities = createSelector(
  getState,
  fromCategories.getCategoriesEntities
);

export const getAllCategories = createSelector(getCategoriesEntities, toArray);

export const getSelectedCategory = createSelector(
  getCategoriesEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.categoryId];
  }
);

export const getCategoriesLoaded = createSelector(
  getState,
  fromCategories.getCategoriesLoaded
);

export const getCategoriesLoading = createSelector(
  getState,
  fromCategories.getCategoriesLoading
);

export const getCategoriesError = createSelector(
  getState,
  fromCategories.getCategoriesError
);
