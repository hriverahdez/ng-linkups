import { CustomError } from "../../../@shared/utils/custom-error";
import { httpErrorMessages } from "../../../@shared/utils/http-error-messages";
import { toEntities } from "../../../@shared/utils/entities-array-helper";
import * as fromNotifications from "../actions";
import { Notification } from "../../models/notification.model";

export interface State {
  entities: { [_id: string]: Notification };
  loaded: boolean;
  loading: boolean;
  error: CustomError;
}

export const initialState: State = {
  entities: {},
  loaded: false,
  loading: false,
  error: {}
};

export function reducer(
  state = initialState,
  action: fromNotifications.NotificationActions
) {
  switch (action.type) {
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
      const entities = toEntities(action.payload, { ...state.entities });
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
      const entities = { ...state.entities, [notification._id]: notification };
      return {
        ...state,
        entities,
        loading: false
      };
    }
  }

  return state;
}

export const getNotificationEntities = (state: State) => state.entities;
export const getNotificationLoaded = (state: State) => state.loaded;
export const getNotificationLoading = (state: State) => state.loading;
export const getNotificationError = (state: State) => state.error;