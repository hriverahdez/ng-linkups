import { User } from "../../@core/models/user.model";

export interface Notification {
  _id?: string;
  type?: string;
  user?: User;
  message?: string;
  time?: Date;
  unread?: boolean;
}
