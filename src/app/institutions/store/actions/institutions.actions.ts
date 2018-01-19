import { Action } from "@ngrx/store";

import { Institution } from "../../models/institution.model";

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

export type InstitutionActions =
  | LoadInstitutions
  | LoadInstitutionsFail
  | LoadInstitutionsSuccess;
