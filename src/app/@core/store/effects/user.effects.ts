import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fromStore from "../../store";
import * as fromRouter from "../actions/router.actions";
import * as fromSharedServices from "../../../@shared/services";
import * as userActions from "../actions";
import { CustomError } from "../../../@shared/utils/custom-error";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromStore.AppState>,
    private authService: fromSharedServices.AuthenticationService,
    private snackbar: fromSharedServices.SnackBarService
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

  @Effect({ dispatch: false })
  loginFail$ = this.actions$.ofType(userActions.LOGIN_FAIL).pipe(
    switchMap(action => {
      return this.store
        .select(fromStore.getLoginError)
        .pipe(
          map((error: CustomError) =>
            this.snackbar.openSimpleSnackBar(error.message)
          )
        );
    })
  );

  @Effect()
  logout$ = this.actions$.ofType(userActions.LOGOUT).pipe(
    map(() => {
      this.authService.logOut();
      return new fromRouter.Go({
        path: ["/login"]
      });
    })
  );
}
