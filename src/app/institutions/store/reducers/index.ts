import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";

import * as fromInstitutions from "./institutions.reducer";

export interface InstitutionsState {
  institutions: fromInstitutions.State;
}

export const reducers: ActionReducerMap<InstitutionsState> = {
  institutions: fromInstitutions.reducer
};

export const getInstitutionsState = createFeatureSelector<InstitutionsState>(
  "institutions"
);
