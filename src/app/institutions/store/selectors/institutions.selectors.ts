import { createSelector } from "@ngrx/store";
import { toArray } from "../../../@shared/utils//entities-array-helper";

import * as fromRoot from "../../../@core/store";
import * as fromFeature from "../reducers";
import * as fromInstitutions from "../reducers/institutions.reducer";

export const getState = createSelector(
  fromFeature.getInstitutionsState,
  (state: fromFeature.InstitutionsState) => state.institutions
);

export const getInstitutionsEntities = createSelector(
  getState,
  fromInstitutions.getInstitutionsEntities
);

export const getAllInstitutions = createSelector(
  getInstitutionsEntities,
  toArray
);

export const getInstitutionsLoaded = createSelector(
  getState,
  fromInstitutions.getInstitutionsLoaded
);

export const getSelectedInstitution = createSelector(
  getInstitutionsEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.institutionId];
  }
);

export const getInstitutionsError = createSelector(
  getState,
  fromInstitutions.getInstitutionsError
);
