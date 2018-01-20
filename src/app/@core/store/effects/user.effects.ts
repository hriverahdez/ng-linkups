import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import * as fromRouter from "../actions/router.actions";
import * as fromSharedServices from "../../../@shared/services";
import * as userActions from "../actions";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: fromSharedServices.AuthenticationService
  ) {}

  @Effect()
  login$ = this.actions$.ofType(userActions.LOGIN).pipe(
    map((action: userActions.Login) => action.payload),
    switchMap(credentials => {
      return this.authService
        .login(credentials)
        .pipe(
          map(user => new userActions.LoginSuccess(user)),
          catchError(error => of(new userActions.LoginFail(error)))
        );
    })
  );

  @Effect()
  loginSuccess$ = this.actions$.ofType(userActions.LOGIN_SUCCESS).pipe(
    map(
      () =>
        new fromRouter.Go({
          path: ["/app/dashboard"]
        })
    )
  );

  @Effect()
  logout$ = this.actions$.ofType(userActions.LOGOUT).pipe(
    map(() => {
      this.authService.logOut;
      return of(new userActions.Logout());
    })
  );
}
