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
  | UpdateSubnet
  | UpdateSubnetFail
  | UpdateSubnetSuccess
  | DeleteSubnet
  | DeleteSubnetFail
  | DeleteSubnetSuccess;
