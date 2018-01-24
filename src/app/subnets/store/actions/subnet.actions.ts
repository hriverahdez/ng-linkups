import { Action } from "@ngrx/store";
import { Subnet } from "../../models/subnet.model";

// LOAD
export const LOAD_SUBNETS = "[Subnets] Load Subnets";
export const LOAD_SUBNETS_FAIL = "[Subnets] Load Subnets Fail";
export const LOAD_SUBNETS_SUCCESS = "[Subnets] Load Subnets Success";

export class LoadSubnet implements Action {
  readonly type = LOAD_SUBNETS;
}

export class LoadSubnetFail implements Action {
  readonly type = LOAD_SUBNETS_FAIL;
  constructor(public payload: any) {}
}

export class LoadSubnetSuccess implements Action {
  readonly type = LOAD_SUBNETS_SUCCESS;
  constructor(public payload: Subnet[]) {}
}

export type SubnetActions = LoadSubnet | LoadSubnetFail | LoadSubnetSuccess;
