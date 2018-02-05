import { CustomError } from "../../../@shared/utils/custom-error";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";
import {
  toEntities,
  toArray
} from "../../../@shared/utils/entities-array-helper";
import * as fromNotifications from "../actions";
import { Notification } from "../../models/notification.model";

export interface State {
  entities: { [_id: string]: Notification };
  unreadCount: number;
  unreadCountLoaded: boolean;
  loaded: boolean;
  loading: boolean;
  error: CustomError;
}

export const initialState: State = {
  entities: {},
  unreadCount: 0,
  unreadCountLoaded: false,
  loaded: false,
  loading: false,
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

    case fromNotifications.SEND_NOTIFICATION: {
      return {
        ...state,
        loading: true
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

export const getNotificationEntities = (state: State) => state.entities;
export const getNotificationUnreadCount = (state: State) => state.unreadCount;
export const getNotificationUnreadCountLoaded = (state: State) =>
  state.unreadCountLoaded;
export const getNotificationLoaded = (state: State) => state.loaded;
export const getNotificationLoading = (state: State) => state.loading;
export const getNotificationError = (state: State) => state.error;
