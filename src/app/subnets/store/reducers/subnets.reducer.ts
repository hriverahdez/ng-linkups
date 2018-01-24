import { Subnet } from "../../models/subnet.model";
import * as fromSubnets from "../actions";

import { CustomError } from "../../../@shared/utils/custom-error";
import { toEntities } from "../../../@shared/utils/entities-array-helper";

export interface State {
  entities: { [_id: string]: Subnet };
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
  action: fromSubnets.SubnetActions
) {
  switch (action.type) {
    case fromSubnets.LOAD_SUBNETS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubnets.LOAD_SUBNETS_FAIL: {
      const error = action.payload;

      return {
        ...state,
        loaded: false,
        loading: false,
        error
      };
    }

    case fromSubnets.LOAD_SUBNETS_SUCCESS: {
      const entities = toEntities(action.payload, { ...state.entities });
      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    }
  }

  return state;
}

export const getSubnetsEntities = (state: State) => state.entities;
export const getSubnetsLoaded = (state: State) => state.loaded;
export const getSubnetsLoading = (state: State) => state.loading;
export const getSubnetsError = (state: State) => state.error;
