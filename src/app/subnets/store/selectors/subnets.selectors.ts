import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../@core/root-store";
import * as fromFeature from "../reducers";
import * as fromSubnets from "../reducers/subnets.reducer";
import { toArray } from "../../../@shared/utils/entities-array-helper";
import { Subnet } from "../../../@shared/models";

export const getState = createSelector(
  fromFeature.getSubnetsState,
  (state: fromFeature.SubnetsState) => state.subnets
);

export const getSubnetsEntities = createSelector(
  getState,
  fromSubnets.getSubnetsEntities
);

export const getAllSubnets = createSelector(getSubnetsEntities, toArray);

export const getAllAvailableSubnets = createSelector(
  getAllSubnets,
  (subnets: Subnet[]) => {
    return subnets.filter(s => s.available);
  }
);

export const getSelectedSubnet = createSelector(
  getSubnetsEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.subnetId];
  }
);

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
