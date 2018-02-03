import { Subnet } from "../../models/subnet.model";
import * as fromSubnets from "../actions";

import { CustomError } from "../../../@shared/utils/custom-error";
import { toEntities } from "../../../@shared/utils/entities-array-helper";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";

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

    case fromSubnets.DELETE_SUBNET:
    case fromSubnets.UPDATE_SUBNET:
    case fromSubnets.ADD_SUBNET_RANGE:
    case fromSubnets.ADD_SUBNET_FROM_MODAL:
    case fromSubnets.ADD_SUBNET: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubnets.DELETE_SUBNET_FAIL:
    case fromSubnets.UPDATE_SUBNET_FAIL:
    case fromSubnets.ADD_SUBNET_RANGE_FAIL:
    case fromSubnets.ADD_SUBNET_FROM_MODAL_FAIL:
    case fromSubnets.ADD_SUBNET_FAIL: {
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

    case fromSubnets.UPDATE_SUBNET_SUCCESS:
    case fromSubnets.ADD_SUBNET_FROM_MODAL_SUCCESS:
    case fromSubnets.ADD_SUBNET_SUCCESS: {
      const subnet = action.payload;
      const entities = { ...state.entities, [subnet._id]: subnet };
      return {
        ...state,
        entities,
        loading: false
      };
    }

    case fromSubnets.DELETE_SUBNET_SUCCESS: {
      const subnet = action.payload;
      const { [subnet._id]: removedinst, ...entities } = state.entities;
      return {
        ...state,
        entities,
        loading: false
      };
    }

    case fromSubnets.ADD_SUBNET_RANGE_SUCCESS: {
      const subnetRangeEntities = toEntities(action.payload, {});
      const entities = { ...state.entities, ...subnetRangeEntities };
      return {
        ...state,
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
