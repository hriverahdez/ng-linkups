import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromSubnets from "../reducers/subnets.reducer";
import { toArray } from "../../../@shared/utils/entities-array-helper";

export const getState = createSelector(
  fromFeature.getSubnetsState,
  (state: fromFeature.SubnetsState) => state.subnets
);

export const getSubnetsEntities = createSelector(
  getState,
  fromSubnets.getSubnetsEntities
);

export const getAllSubnets = createSelector(getSubnetsEntities, toArray);

export const getSubnetsLoaded = createSelector(
  getState,
  fromSubnets.getSubnetsLoaded
);

export const getSubnetsLoading = createSelector(
  getState,
  fromSubnets.getSubnetsLoading
);

export const getSubnetsError = createSelector(
  getState,
  fromSubnets.getSubnetsError
);
