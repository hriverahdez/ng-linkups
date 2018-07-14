import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs";
import {
  catchError,
  debounceTime,
  filter,
  map,
  switchMap,
  take,
  tap
} from "rxjs/operators";

import * as userActions from "../../../@core/store/actions";
import * as fromInstitutions from "../../../institutions/store/actions";
import * as fromSubnets from "../../../subnets/store/actions";
import * as fromCategories from "../../../categories/store/actions";

import * as fromFeature from "../reducers";
import * as fromSelectors from "../selectors";
import * as notificationActions from "../actions";
import * as fromServices from "../../services";
import { Store } from "@ngrx/store";

@Injectable()
export class NotificationsEffect {
  constructor(
    private actions$: Actions,
    private store: Store<fromFeature.NotificationsState>,
    private notificationSocketHandler: fromServices.NotificationSocketHandlerService,
    private notificationService: fromServices.NotificationsService,
    private notificationHelper: fromServices.NotificationHelperService
  ) {}

  /**
   * Sets initial unread notification count that is sent on the login request as part of the user info
   */
  @Effect()
  setUnreadCountOnLogin = this.actions$
    .ofType(userActions.LOGIN_SUCCESS)
    .pipe(
      switchMap(() =>
        this.notificationService
          .getInitialUnreadNotificationsCount()
          .pipe(map(count => new notificationActions.SetUnreadCount(count)))
      )
    );

  /**
   * Sets unread notification count for subsequent requests or page refreshes after login
   */
  @Effect()
  setUnreadCount$ = this.actions$
    .ofType(notificationActions.GET_UNREAD_COUNT)
    .pipe(
      switchMap(() =>
        this.notificationService.getUnreadNotificationsCountFromServer().pipe(
          map(data => new notificationActions.SetUnreadCount(data.count)),
          catchError(error =>
            of(new notificationActions.GetUnreadCountFail(error))
          )
        )
      )
    );

  @Effect()
  loadNotificationsOnStart$ = this.actions$
    .ofType(notificationActions.OPEN_NOTIFICATIONS_NAVBAR)
    .pipe(
      // map(() => new notificationActions.LoadNotifications())
      switchMap(() =>
        this.store.select(fromSelectors.getNotificationsLoaded).pipe(
          tap(loaded => {
            if (!loaded) {
              new notificationActions.LoadNotifications();
            }
          }),
          filter(loaded => loaded),
          take(1)
        )
      )
    );

  /**
   * Loads all the current user's notifications
   */
  @Effect()
  notifications$ = this.actions$
    .ofType(notificationActions.LOAD_NOTIFICATIONS)
    .pipe(
      switchMap(() =>
        this.notificationService.getNotifications().pipe(
          map(
            notifications =>
              new notificationActions.LoadNotificationsSuccess(notifications)
          ),
          catchError(error =>
            of(new notificationActions.LoadNotificationsFail(error))
          )
        )
      )
    );

  /**
   * Sets all notifications as 'read' on the server
   */
  @Effect({ dispatch: false })
  readAllNotifications$ = this.actions$
    .ofType(notificationActions.CLOSE_NOTIFICATIONS_NAVBAR)
    .pipe(
      debounceTime(100),
      switchMap(() =>
        this.store.select(fromSelectors.allNotificationsRead).pipe(
          filter(allRead => allRead),
          switchMap(() => this.notificationService.readAllNotifications()),
          take(1)
        )
      )
    );

  @Effect()
  clearNotifications$ = this.actions$
    .ofType(notificationActions.CLOSE_NOTIFICATIONS_NAVBAR)
    .pipe(map(() => new notificationActions.ClearReadNotifications()));

  @Effect({ dispatch: false })
  sendNotification$ = this.actions$
    .ofType(
      fromInstitutions.ADD_INSTITUTION_SUCCESS,
      fromInstitutions.UPDATE_INSTITUTION_SUCCESS,
      fromInstitutions.DELETE_INSTITUTION_SUCCESS,

      fromCategories.ADD_CATEGORY_SUCCESS,
      fromCategories.UPDATE_CATEGORY_SUCCESS,
      fromCategories.DELETE_CATEGORY_SUCCESS,

      fromSubnets.ADD_SUBNET_SUCCESS,
      fromSubnets.ADD_SUBNET_FROM_MODAL_SUCCESS,
      fromSubnets.ADD_SUBNET_RANGE_SUCCESS,
      fromSubnets.UPDATE_SUBNET_SUCCESS,
      fromSubnets.DELETE_SUBNET_SUCCESS
    )
    .pipe(
      map(
        (
          action:
            | fromInstitutions.InstitutionActions
            | fromCategories.CategoryActions
            | fromSubnets.SubnetActions
        ) => action
      ),
      map(action => {
        const notification = this.notificationHelper.getNotificationForAction(
          action
        );
        return this.notificationSocketHandler.sendNotification(notification);
      })
    );

  @Effect()
  onNotification$ = this.notificationSocketHandler.notifications$.pipe(
    map(
      (notification: Notification) =>
        new notificationActions.SendNotificationSuccess(notification)
    )
  );
}
