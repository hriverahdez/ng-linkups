import { UserSettings } from "./user-settings.model";

export interface User {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  unreadNotifications?: number;
  settings?: UserSettings;
}
