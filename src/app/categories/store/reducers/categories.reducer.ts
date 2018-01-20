import { Category } from "../../models/category.model";
import { CustomError } from "../../../@shared/utils/custom-error";

import * as categoryActions from "../actions";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";
import { toEntities } from "../../../@shared/utils/entities-array-helper";

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
  }

  return state;
}

export const getCategoriesEntities = (state: State) => state.entities;
export const getCategoriesLoaded = (state: State) => state.loaded;
export const getCategoriesLoading = (state: State) => state.loading;
export const getCategoriesError = (state: State) => state.error;
