import { toEntities } from "../../../@shared/utils/entities-array-helper";

import { Institution } from "../../models/institution.model";

import * as fromInstitutions from "../actions";

export interface State {
  entities: { [_id: string]: Institution };
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromInstitutions.InstitutionActions
): State {
  switch (action.type) {
    case fromInstitutions.LOAD_INSTITUTIONS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromInstitutions.LOAD_INSTITUTIONS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case fromInstitutions.LOAD_INSTITUTIONS_SUCCESS: {
      console.log(action.payload);
      const entities = toEntities(action.payload, { ...state.entities });

      console.log(entities);
      return {
        ...state,
        entities,
        loaded: true,
        loading: false
      };
    }

    case fromInstitutions.ADD_INSTITUTION: {
      return {
        ...state,
        loading: true
      };
    }

    case fromInstitutions.ADD_INSTITUTION_FAIL: {
      return {
        ...state,
        loading: false
      };
    }

    case fromInstitutions.ADD_INSTITUTION_SUCCESS: {
      const institution = action.payload;
      const entities = { ...state.entities, institution };
      return {
        ...state,
        entities,
        loading: false
      };
    }
  }

  return state;
}

export const getInstitutionsEntities = (state: State) => state.entities;
export const getInstitutionsLoaded = (state: State) => state.loaded;
export const getInstitutionsLoading = (state: State) => state.loading;
