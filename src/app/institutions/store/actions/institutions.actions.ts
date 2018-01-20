import { Action } from "@ngrx/store";

import { Institution } from "../../models/institution.model";

// LOAD
export const LOAD_INSTITUTIONS = "[INSTITUTIONS] Load Institutions";
export const LOAD_INSTITUTIONS_FAIL = "[INSTITUTIONS] Load Institutions Fail";
export const LOAD_INSTITUTIONS_SUCCESS =
  "[INSTITUTIONS] Load Institutions Success";

export class LoadInstitutions implements Action {
  readonly type = LOAD_INSTITUTIONS;
}

export class LoadInstitutionsFail implements Action {
  readonly type = LOAD_INSTITUTIONS_FAIL;
  constructor(public payload: any) {}
}

export class LoadInstitutionsSuccess implements Action {
  readonly type = LOAD_INSTITUTIONS_SUCCESS;
  constructor(public payload: Institution[]) {}
}

// ADD
export const ADD_INSTITUTION = "[INSTITUTIONS] Add Institution";
export const ADD_INSTITUTION_FAIL = "[INSTITUTIONS] Add Institution Fail";
export const ADD_INSTITUTION_SUCCESS = "[INSTITUTIONS] Add Institution Success";

export class AddInstitution implements Action {
  readonly type = ADD_INSTITUTION;
  constructor(public payload: Institution) {}
}

export class AddInstitutionFail implements Action {
  readonly type = ADD_INSTITUTION_FAIL;
  constructor(public payload: any) {}
}

export class AddInstitutionSuccess implements Action {
  readonly type = ADD_INSTITUTION_SUCCESS;
  constructor(public payload: Institution) {}
}

export type InstitutionActions =
  | LoadInstitutions
  | LoadInstitutionsFail
  | LoadInstitutionsSuccess
  | AddInstitution
  | AddInstitutionFail
  | AddInstitutionSuccess;
