import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";
import {
  toEntities,
  toArray
} from "../../../@shared/utils/entities-array-helper";
import * as fromNotifications from "../actions";
import { CustomError, Notification } from "../../../@shared/models";

export interface NotificationsState {
  entities: { [_id: string]: Notification };
  unreadCount: number;
  unreadCountLoaded: boolean;
  loaded: boolean;
  loading: boolean;
  navbarOpened: boolean;
  error: CustomError;
}

export const initialState: NotificationsState = {
  entities: {},
  unreadCount: 0,
  unreadCountLoaded: false,
  loaded: false,
  loading: false,
  navbarOpened: false,
  error: {}
};

export function reducer(
  state = initialState,
  action: fromNotifications.NotificationActions
) {
  switch (action.type) {
    case fromNotifications.SET_UNREAD_COUNT: {
      const unreadCount = action.payload;
      return { ...state, unreadCountLoaded: true, unreadCount };
    }

    case fromNotifications.CLEAR_READ_NOTIFICATIONS: {
      const notificationsArr = toArray(state.entities).map(n => ({
        ...n,
        unread: false
      }));

      const unreadCount = 0;

      const entities = toEntities(notificationsArr, {});
      return {
        ...state,
        unreadCount,
        entities
      };
    }

    case fromNotifications.OPEN_NOTIFICATIONS_NAVBAR: {
      return {
        ...state,
        navbarOpened: true
      };
    }

    case fromNotifications.CLOSE_NOTIFICATIONS_NAVBAR: {
      return {
        ...state,
        navbarOpened: false
      };
    }

    case fromNotifications.LOAD_NOTIFICATIONS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromNotifications.LOAD_NOTIFICATIONS_FAIL: {
      const { status } = action.payload;
      const error: CustomError = {
        code: status,
        message: httpErrorMessages[status]
      };

      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case fromNotifications.LOAD_NOTIFICATIONS_SUCCESS: {
      const notifications = action.payload;

      const entities = toEntities(notifications, { ...state.entities });
      return {
        ...state,
        entities,
        loaded: true,
        loading: false
      };
    }

    case fromNotifications.SEND_NOTIFICATION_FAIL: {
      const { status } = action.payload;
      const error: CustomError = {
        code: status,
        message: httpErrorMessages[status]
      };

      return {
        ...state,
        loading: false,
        error
      };
    }

    case fromNotifications.SEND_NOTIFICATION_SUCCESS: {
      const notification = action.payload;
      const entities = {
        ...state.entities,
        [notification._id]: { ...notification, unread: true }
      };
      const unreadCount = state.unreadCount + 1;
      return {
        ...state,
        entities,
        unreadCount,
        loading: false
      };
    }
  }

  return state;
}

export const getNotificationEntities = (state: NotificationsState) =>
  state.entities;
export const getNotificationUnreadCount = (state: NotificationsState) =>
  state.unreadCount;
export const getNotificationUnreadCountLoaded = (state: NotificationsState) =>
  state.unreadCountLoaded;
export const getNotificationLoaded = (state: NotificationsState) =>
  state.loaded;
export const getNotificationLoading = (state: NotificationsState) =>
  state.loading;
export const getNotificationsNavbarOpened = (state: NotificationsState) =>
  state.navbarOpened;
export const getNotificationError = (state: NotificationsState) => state.error;
