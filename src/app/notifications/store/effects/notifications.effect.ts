import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import { switchMap, catchError, map } from "rxjs/operators";

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
          .getUnreadNotificationsCountFromUser()
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
            map(count => new notificationActions.SetUnreadCount(count)),
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
          .getUnreadNotifications()
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
