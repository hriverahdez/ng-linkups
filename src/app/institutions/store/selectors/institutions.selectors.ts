import { createSelector } from "@ngrx/store";
import { toArray } from "../../../@shared/utils//entities-array-helper";

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

export const getInstitutionsError = createSelector(
  getState,
  fromInstitutions.getInstitutionsError
);
