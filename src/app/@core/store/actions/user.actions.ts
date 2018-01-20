import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";

export const LOGIN = "[Core] Log in";
export const LOGIN_FAIL = "[Core] Log in Fail";
export const LOGIN_SUCCESS = "[Core] Log in Success";
export const LOGOUT = "[Core] Log out";
export const SET_USER = "[Core] Set User";

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: User) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: User) {}
}

export type UserActions = Login | LoginFail | LoginSuccess | Logout | SetUser;
