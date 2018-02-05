import { Action } from "@ngrx/store";
import { Notification } from "../../models/notification.model";

// UNREAD COUNT
export const GET_UNREAD_COUNT = "[Notifications] Get Unread Count";
export const GET_UNREAD_COUNT_FAIL = "[Notifications] Get Unread Count Fail";
export const SET_UNREAD_COUNT = "[Notifications] Set Unread Count";

export class GetUnreadCount implements Action {
  readonly type = GET_UNREAD_COUNT;
}

export class GetUnreadCountFail implements Action {
  readonly type = GET_UNREAD_COUNT_FAIL;
  constructor(public payload: any) {}
}

export class SetUnreadCount implements Action {
  readonly type = SET_UNREAD_COUNT;
  constructor(public payload: number) {}
}

// READ ALL
export const READ_ALL_NOTIFICATIONS = "[Notifications] Read All Notifications";

export class ReadAllNotifications implements Action {
  readonly type = READ_ALL_NOTIFICATIONS;
}

// CLEAR READ NOTIFICATIONS
export const CLEAR_READ_NOTIFICATIONS =
  "[Notifications] Clear Read Notifications";

export class ClearReadNotifications implements Action {
  readonly type = CLEAR_READ_NOTIFICATIONS;
}

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
  | GetUnreadCount
  | GetUnreadCountFail
  | SetUnreadCount
  | ReadAllNotifications
  | ClearReadNotifications
  | LoadNotifications
  | LoadNotificationsFail
  | LoadNotificationsSuccess
  | SendNotification
  | SendNotificationFail
  | SendNotificationSuccess;
