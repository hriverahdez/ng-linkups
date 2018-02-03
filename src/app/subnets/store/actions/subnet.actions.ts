import { Action } from "@ngrx/store";
import { Subnet } from "../../models/subnet.model";

// LOAD
export const LOAD_SUBNETS = "[Subnets] Load Subnets";
export const LOAD_SUBNETS_FAIL = "[Subnets] Load Subnets Fail";
export const LOAD_SUBNETS_SUCCESS = "[Subnets] Load Subnets Success";

export class LoadSubnets implements Action {
  readonly type = LOAD_SUBNETS;
}

export class LoadSubnetsFail implements Action {
  readonly type = LOAD_SUBNETS_FAIL;
  constructor(public payload: any) {}
}

export class LoadSubnetsSuccess implements Action {
  readonly type = LOAD_SUBNETS_SUCCESS;
  constructor(public payload: Subnet[]) {}
}

// ADD
export const ADD_SUBNET = "[Subnets] Add Subnet";
export const ADD_SUBNET_FAIL = "[Subnets] Add Subnet Fail";
export const ADD_SUBNET_SUCCESS = "[Subnets] Add Subnet Success";

export class AddSubnet implements Action {
  readonly type = ADD_SUBNET;
  constructor(public payload: Subnet) {}
}

export class AddSubnetFail implements Action {
  readonly type = ADD_SUBNET_FAIL;
  constructor(public payload: any) {}
}

export class AddSubnetSuccess implements Action {
  readonly type = ADD_SUBNET_SUCCESS;
  constructor(public payload: Subnet) {}
}

// ADD FROM MODAL

export const ADD_SUBNET_FROM_MODAL = "[Subnets] Add Subnet From Modal";
export const ADD_SUBNET_FROM_MODAL_FAIL =
  "[Subnets] Add Subnet From Modal Fail";
export const ADD_SUBNET_FROM_MODAL_SUCCESS =
  "[Subnets] Add Subnet From Modal Sucess";

export class AddSubnetFromModal implements Action {
  readonly type = ADD_SUBNET_FROM_MODAL;
  constructor(public payload: Subnet) {}
}

export class AddSubnetFromModalFail implements Action {
  readonly type = ADD_SUBNET_FROM_MODAL_FAIL;
  constructor(public payload: any) {}
}

export class AddSubnetFromModalSuccess implements Action {
  readonly type = ADD_SUBNET_FROM_MODAL_SUCCESS;
  constructor(public payload: Subnet) {}
}

// ADD RANGE
export const ADD_SUBNET_RANGE = "[Subnets] Add Subnet Range";
export const ADD_SUBNET_RANGE_FAIL = "[Subnets] Add Subnet Range Fail";
export const ADD_SUBNET_RANGE_SUCCESS = "[Subnets] Add Subnet Range Success";

export class AddSubnetRange implements Action {
  readonly type = ADD_SUBNET_RANGE;
  constructor(public payload: { range: string[]; mask: number }) {}
}

export class AddSubnetRangeFail implements Action {
  readonly type = ADD_SUBNET_RANGE_FAIL;
  constructor(public payload: any) {}
}

export class AddSubnetRangeSuccess implements Action {
  readonly type = ADD_SUBNET_RANGE_SUCCESS;
  constructor(public payload: Subnet[]) {}
}

// UPDATE
export const UPDATE_SUBNET = "[Subnet] Update Subnet";
export const UPDATE_SUBNET_FAIL = "[Subnet] Update Subnet Fail";
export const UPDATE_SUBNET_SUCCESS = "[Subnet] Update Subnet Success";

export class UpdateSubnet implements Action {
  readonly type = UPDATE_SUBNET;
  constructor(public payload: Subnet) {}
}

export class UpdateSubnetFail implements Action {
  readonly type = UPDATE_SUBNET_FAIL;
  constructor(public payload: any) {}
}

export class UpdateSubnetSuccess implements Action {
  readonly type = UPDATE_SUBNET_SUCCESS;
  constructor(public payload: Subnet) {}
}

// DELETE
export const DELETE_SUBNET = "[Subnets] Delete Subnet";
export const DELETE_SUBNET_FAIL = "[Subnets] Delete Subnet Fail";
export const DELETE_SUBNET_SUCCESS = "[Subnets] Delete Subnet Success";

export class DeleteSubnet implements Action {
  readonly type = DELETE_SUBNET;
  constructor(public payload: Subnet) {}
}

export class DeleteSubnetFail implements Action {
  readonly type = DELETE_SUBNET_FAIL;
  constructor(public payload: any) {}
}

export class DeleteSubnetSuccess implements Action {
  readonly type = DELETE_SUBNET_SUCCESS;
  constructor(public payload: Subnet) {}
}

export type SubnetActions =
  | LoadSubnets
  | LoadSubnetsFail
  | LoadSubnetsSuccess
  | AddSubnet
  | AddSubnetFail
  | AddSubnetSuccess
  | AddSubnetFromModal
  | AddSubnetFromModalFail
  | AddSubnetFromModalSuccess
  | AddSubnetRange
  | AddSubnetRangeFail
  | AddSubnetRangeSuccess
  | UpdateSubnet
  | UpdateSubnetFail
  | UpdateSubnetSuccess
  | DeleteSubnet
  | DeleteSubnetFail
  | DeleteSubnetSuccess;
