import { Action } from "@ngrx/store";

import { Institution } from "../../models/institution.model";

// LOAD
export const LOAD_INSTITUTIONS = "[Institutions] Load Institutions";
export const LOAD_INSTITUTIONS_FAIL = "[Institutions] Load Institutions Fail";
export const LOAD_INSTITUTIONS_SUCCESS =
  "[Institutions] Load Institutions Success";

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
export const ADD_INSTITUTION = "[Institutions] Add Institution";
export const ADD_INSTITUTION_FAIL = "[Institutions] Add Institution Fail";
export const ADD_INSTITUTION_SUCCESS = "[Institutions] Add Institution Success";

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

// UPDATE
export const UPDATE_INSTITUTION = "[Institutions] Update Institution";
export const UPDATE_INSTITUTION_FAIL = "[Institutions] Update Institution Fail";
export const UPDATE_INSTITUTION_SUCCESS =
  "[Institutions] Update Institution Success";

export class UpdateInstitution implements Action {
  readonly type = UPDATE_INSTITUTION;
  constructor(public payload: Institution) {}
}

export class UpdateInstitutionFail implements Action {
  readonly type = UPDATE_INSTITUTION_FAIL;
  constructor(public payload: any) {}
}

export class UpdateInstitutionSuccess implements Action {
  readonly type = UPDATE_INSTITUTION_SUCCESS;
  constructor(public payload: Institution) {}
}

// DELETE
export const DELETE_INSTITUTION = "[Institutions] Delete Institution";
export const DELETE_INSTITUTION_FAIL = "[Institutions] Delete Institution Fail";
export const DELETE_INSTITUTION_SUCCESS =
  "[Institutions] Delete Institution Success";

export class DeleteInstitution implements Action {
  readonly type = DELETE_INSTITUTION;
  constructor(public payload: Institution) {}
}

export class DeleteInstitutionFail implements Action {
  readonly type = DELETE_INSTITUTION_FAIL;
  constructor(public payload: any) {}
}

export class DeleteInstitutionSuccess implements Action {
  readonly type = DELETE_INSTITUTION_SUCCESS;
  constructor(public payload: Institution) {}
}

export type InstitutionActions =
  | LoadInstitutions
  | LoadInstitutionsFail
  | LoadInstitutionsSuccess
  | AddInstitution
  | AddInstitutionFail
  | AddInstitutionSuccess
  | UpdateInstitution
  | UpdateInstitutionFail
  | UpdateInstitutionSuccess
  | DeleteInstitution
  | DeleteInstitutionFail
  | DeleteInstitutionSuccess;
