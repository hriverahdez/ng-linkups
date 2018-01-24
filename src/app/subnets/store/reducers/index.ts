import { createFeatureSelector, ActionReducerMap } from "@ngrx/store";
import * as fromSubnets from "./subnets.reducer";

export interface SubnetsState {
  subnets: fromSubnets.State;
}

export const reducers: ActionReducerMap<SubnetsState> = {
  subnets: fromSubnets.reducer
};

export const getSubnetsState = createFeatureSelector<SubnetsState>("subnets");
