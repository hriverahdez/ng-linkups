import { Action } from "@ngrx/store";
import { User } from "../../../@shared/models";

export const SAVE_USER_PROFILE = "[Users] Save User Profile";

export class SaveUserProfile implements Action {
  readonly type = SAVE_USER_PROFILE;
  constructor(public payload: User) {}
}
