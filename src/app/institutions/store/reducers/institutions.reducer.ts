import {
  toEntities,
  toArray
} from "../../../@shared/utils/entities-array-helper";

import { Institution } from "../../models/institution.model";

import * as fromInstitutions from "../actions";
import * as fromCategories from "../../../categories/store/actions";

import { CustomError } from "../../../@shared/utils/custom-error";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";

export interface State {
  entities: { [_id: string]: Institution };
  loaded: boolean;
  loading: boolean;
  error: CustomError;
}

export const initialState: State = {
  entities: {},
  loaded: false,
  loading: false,
  error: {}
};

export function reducer(
  state = initialState,
  action: fromInstitutions.InstitutionActions | fromCategories.CategoryActions
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
      const entities = toEntities(action.payload, { ...state.entities });

      return {
        ...state,
        entities,
        loaded: true,
        loading: false
      };
    }

    case fromInstitutions.DELETE_INSTITUTION:
    case fromInstitutions.UPDATE_INSTITUTION:
    case fromInstitutions.ADD_INSTITUTION: {
      return {
        ...state,
        loading: true
      };
    }

    case fromInstitutions.DELETE_INSTITUTION_FAIL:
    case fromInstitutions.UPDATE_INSTITUTION_FAIL:
    case fromInstitutions.ADD_INSTITUTION_FAIL: {
      const { status } = action.payload;
      const error: CustomError = {
        code: status,
        message: httpErrorMessages[status]
      };

      return {
        ...state,
        loading: false,
        error
      };
    }

    case fromInstitutions.UPDATE_INSTITUTION_SUCCESS:
    case fromInstitutions.ADD_INSTITUTION_SUCCESS: {
      const institution = action.payload;
      const entities = { ...state.entities, [institution._id]: institution };
      return {
        ...state,
        entities,
        loading: false
      };
    }

    case fromInstitutions.DELETE_INSTITUTION_SUCCESS: {
      const institution = action.payload;
      const { [institution._id]: removedinst, ...entities } = state.entities;
      return {
        ...state,
        entities,
        loading: false
      };
    }

    case fromCategories.UPDATE_CATEGORY_SUCCESS: {
      const updatedCategory = action.payload;

      const institutions = toArray(state.entities).map(
        (inst: Institution) =>
          inst.category && inst.category._id === updatedCategory._id
            ? { ...inst, category: updatedCategory }
            : inst
      );

      const entities = toEntities(institutions, { ...state.entities });
      return {
        ...state,
        entities
      };
    }

    case fromCategories.DELETE_CATEGORY_SUCCESS: {
      const deletedCategory = action.payload;

      const institutions = toArray(state.entities).map(
        (inst: Institution) =>
          inst.category && inst.category._id === deletedCategory._id
            ? { ...inst, category: null }
            : inst
      );

      const entities = toEntities(institutions, { ...state.entities });
      return {
        ...state,
        entities
      };
    }
  }

  return state;
}

export const getInstitutionsEntities = (state: State) => state.entities;
export const getInstitutionsLoaded = (state: State) => state.loaded;
export const getInstitutionsLoading = (state: State) => state.loading;
export const getInstitutionsError = (state: State) => state.error;
