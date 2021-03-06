import * as categoryActions from "../actions";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";
import { toEntities } from "../../../@shared/utils/entities-array-helper";
import { Category } from "../../../@shared/models";
import { CustomError } from "../../../@shared/models/custom-error.model";

export interface State {
  entities: { [_id: string]: Category };
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
  action: categoryActions.CategoryActions
): State {
  switch (action.type) {
    case categoryActions.LOAD_CATEGORIES: {
      return {
        ...state,
        loading: true
      };
    }

    case categoryActions.LOAD_CATEGORIES_FAIL: {
      const { status } = action.payload;
      const error: CustomError = {
        code: status,
        message: httpErrorMessages[status]
      };

      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case categoryActions.LOAD_CATEGORIES_SUCCESS: {
      const entities = toEntities(action.payload, { ...state.entities });
      return {
        ...state,
        entities,
        loaded: true,
        loading: false
      };
    }

    case categoryActions.ADD_CATEGORY: {
      return {
        ...state,
        loading: true
      };
    }

    case categoryActions.DELETE_CATEGORY_FAIL:
    case categoryActions.UPDATE_CATEGORY_FAIL:
    case categoryActions.ADD_CATEGORY_FAIL: {
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

    case categoryActions.UPDATE_CATEGORY_SUCCESS:
    case categoryActions.ADD_CATEGORY_SUCCESS: {
      const category = action.payload;
      const entities = { ...state.entities, [category._id]: category };

      return {
        ...state,
        entities,
        loading: false
      };
    }

    case categoryActions.DELETE_CATEGORY_SUCCESS: {
      const category = action.payload;
      const { [category._id]: removedCategory, ...entities } = state.entities;

      return {
        ...state,
        entities,
        loading: false
      };
    }
  }

  return state;
}

export const getCategoriesEntities = (state: State) => state.entities;
export const getCategoriesLoaded = (state: State) => state.loaded;
export const getCategoriesLoading = (state: State) => state.loading;
export const getCategoriesError = (state: State) => state.error;
