import { User } from "../../@core/models/user.model";

export interface Notification {
  _id?: string;
  icon?: string;
  user?: string;
  message?: string;
  time?: number;
  unread?: boolean;
}
