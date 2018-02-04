import { Action } from "@ngrx/store";
import { Notification } from "../../models/notification.model";

// LOAD
export const LOAD_NOTIFICATIONS = "[Notifications] Load Notifications";
export const LOAD_NOTIFICATIONS_FAIL =
  "[Notifications] Load Notifications Fail";
export const LOAD_NOTIFICATIONS_SUCCESS =
  "[Notifications] Load Notifications Success";

export class LoadNotifications implements Action {
  readonly type = LOAD_NOTIFICATIONS;
}

export class LoadNotificationsFail implements Action {
  readonly type = LOAD_NOTIFICATIONS_FAIL;
  constructor(public payload: any) {}
}

export class LoadNotificationsSuccess implements Action {
  readonly type = LOAD_NOTIFICATIONS_SUCCESS;
  constructor(public payload: Notification[]) {}
}

// SEND
export const SEND_NOTIFICATION = "[Notifications] Send Notification";
export const SEND_NOTIFICATION_FAIL = "[Notifications] Send Notification Fail";
export const SEND_NOTIFICATION_SUCCESS =
  "[Notifications] Send Notification Success";

export class SendNotification implements Action {
  readonly type = SEND_NOTIFICATION;
  constructor(public payload: Notification) {}
}

export class SendNotificationFail implements Action {
  readonly type = SEND_NOTIFICATION_FAIL;
  constructor(public payload: any) {}
}

export class SendNotificationSuccess implements Action {
  readonly type = SEND_NOTIFICATION_SUCCESS;
  constructor(public payload: Notification) {}
}

export type NotificationActions =
  | LoadNotifications
  | LoadNotificationsFail
  | LoadNotificationsSuccess
  | SendNotification
  | SendNotificationFail
  | SendNotificationSuccess;
