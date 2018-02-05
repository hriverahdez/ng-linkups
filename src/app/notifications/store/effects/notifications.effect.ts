import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import {
  debounceTime,
  filter,
  switchMap,
  catchError,
  map
} from "rxjs/operators";

import * as userActions from "../../../@core/store/actions";
import * as notificationActions from "../actions";
import * as fromServices from "../../services";

@Injectable()
export class NotificationsEffect {
  constructor(
    private actions$: Actions,
    private notificationService: fromServices.NotificationsService
  ) {}

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

  @Effect()
  setUnreadCount$ = this.actions$
    .ofType(notificationActions.GET_UNREAD_COUNT)
    .pipe(
      switchMap(() =>
        this.notificationService
          .getUnreadNotificationsCountFromServer()
          .pipe(
            map(data => new notificationActions.SetUnreadCount(data.count)),
            catchError(error =>
              of(new notificationActions.GetUnreadCountFail(error))
            )
          )
      )
    );

  @Effect()
  notifications$ = this.actions$
    .ofType(notificationActions.LOAD_NOTIFICATIONS)
    .pipe(
      switchMap(() =>
        this.notificationService
          .getNotifications()
          .pipe(
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

  @Effect()
  readAllNotificationsWhenFew$ = this.actions$
    .ofType(notificationActions.LOAD_NOTIFICATIONS_SUCCESS)
    .pipe(
      map(
        (action: notificationActions.LoadNotificationsSuccess) => action.payload
      ),
      filter(notifications => notifications.filter(n => n.unread).length <= 10),
      map(() => new notificationActions.ReadAllNotifications())
    );

  @Effect({ dispatch: false })
  readAllNotifications$ = this.actions$
    .ofType(notificationActions.READ_ALL_NOTIFICATIONS)
    .pipe(switchMap(() => this.notificationService.readAllNotifications()));

  @Effect()
  clearNotifications$ = this.actions$
    .ofType(notificationActions.READ_ALL_NOTIFICATIONS)
    .pipe(
      debounceTime(10000),
      map(() => new notificationActions.ClearReadNotifications())
    );

  // @Effect()
  // sendNotification$ = this.actions$
  //   .ofType(notificationActions.SEND_NOTIFICATION)
  //   .pipe(
  //     map((action: notificationActions.SendNotification) => action.payload),
  //     switchMap(notification => {
  //       return this.notificationService
  //         .add(notification)
  //         .pipe(
  //           map(
  //             category =>
  //               new notificationActions.SendNotificationSuccess(notification)
  //           ),
  //           catchError(error =>
  //             of(new notificationActions.SendNotificationFail(error))
  //           )
  //         );
  //     })
  //   );
}
