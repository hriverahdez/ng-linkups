import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromNotifications from "../reducers/notifications.reducer";
import { toArray } from "../../../@shared/utils/entities-array-helper";

export const selectNotificationEntities = createSelector(
  fromFeature.selectNotificationsState,
  fromNotifications.getNotificationEntities
);

export const selectAllNotifications = createSelector(
  selectNotificationEntities,
  toArray
);

export const selectUnreadNotifications = createSelector(
  selectAllNotifications,
  notifications => notifications.filter(n => n.unread)
);

export const selectNotificationsLoading = createSelector(
  fromFeature.selectNotificationsState,
  fromNotifications.getNotificationLoading
);

export const selectNotificationsLoaded = createSelector(
  fromFeature.selectNotificationsState,
  fromNotifications.getNotificationLoaded
);

export const selectUnreadNotificationsCount = createSelector(
  fromFeature.selectNotificationsState,
  fromNotifications.getNotificationUnreadCount
);

export const selectUnreadNotificationsCountLoaded = createSelector(
  fromFeature.selectNotificationsState,
  fromNotifications.getNotificationUnreadCountLoaded
);

export const allNotificationsRead = createSelector(
  selectUnreadNotificationsCount,
  count => !!(count === 0)
);

export const getNotificationsNavbarOpened = createSelector(
  fromFeature.selectNotificationsState,
  fromNotifications.getNotificationsNavbarOpened
);
