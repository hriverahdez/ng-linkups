import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromNotifications from "../reducers/notifications.reducer";
import { toArray } from "../../../@shared/utils/entities-array-helper";

export const getState = createSelector(
  fromFeature.getNotificationState,
  (state: fromFeature.NotificationsState) => state.notifications
);

export const getNotificationEntities = createSelector(
  getState,
  fromNotifications.getNotificationEntities
);

export const getAllNotifications = createSelector(
  getNotificationEntities,
  toArray
);

export const getNotificationsLoading = createSelector(
  getState,
  fromNotifications.getNotificationLoading
);

export const getNotificationsLoaded = createSelector(
  getState,
  fromNotifications.getNotificationLoaded
);
