import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";
import { UserSettings } from "../../models/user-settings.model";

// Login
export const LOGIN = "[Core] Log in";
export const LOGIN_FAIL = "[Core] Log in Fail";
export const LOGIN_SUCCESS = "[Core] Log in Success";

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

// Register
export const REGISTER = "[Core] Register";
export const REGISTER_FAIL = "[Core] Register Fail";
export const REGISTER_SUCCESS = "[Core] Register Success";

export class Register implements Action {
  readonly type = REGISTER;
  constructor(public payload: User) {}
}

export class RegisterFail implements Action {
  readonly type = REGISTER_FAIL;
  constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;
  constructor(public payload: User) {}
}

// Logout
export const LOGOUT = "[Core] Log out";

export class Logout implements Action {
  readonly type = LOGOUT;
}

// Refresh User
export const SET_USER = "[Core] Set User";

export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: User) {}
}

export type UserActions =
  | Login
  | LoginFail
  | LoginSuccess
  | Register
  | RegisterFail
  | RegisterSuccess
  | Logout
  | SetUser;
