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

export type SubnetActions = LoadSubnets | LoadSubnetsFail | LoadSubnetsSuccess;
