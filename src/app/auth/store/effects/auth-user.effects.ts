import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { map, switchMap, catchError } from "rxjs/operators";

import * as fromFeature from "../reducers";
import * as fromSelectors from "../selectors";

import * as fromRouter from "../../../@core/root-store/actions/router.action";
import * as userActions from "../actions";
import { of } from "rxjs";
import { AuthenticationService } from "../../services";
import { SnackBarService } from "../../../@shared/utility/snack-bar.service";
import { CustomError } from "../../../@shared/models/custom-error.model";

@Injectable()
export class AuthUserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromFeature.AuthState>,
    private authService: AuthenticationService,
    private snackbar: SnackBarService
  ) {}

  @Effect()
  login$ = this.actions$.ofType(userActions.LOGIN).pipe(
    map((action: userActions.Login) => action.payload),
    switchMap(credentials => {
      return this.authService.login(credentials).pipe(
        map(user => new userActions.LoginSuccess(user)),
        catchError(error => of(new userActions.LoginFail(error)))
      );
    })
  );

  @Effect()
  register$ = this.actions$.ofType(userActions.REGISTER).pipe(
    map((action: userActions.Register) => action.payload),
    switchMap(user =>
      this.authService.register(user).pipe(
        map(registeredUser => new userActions.RegisterSuccess(registeredUser)),
        catchError(error => of(new userActions.RegisterFail(error)))
      )
    )
  );

  @Effect()
  authSuccess$ = this.actions$
    .ofType(userActions.LOGIN_SUCCESS, userActions.REGISTER_SUCCESS)
    .pipe(
      map(
        () =>
          new fromRouter.Go({
            path: ["/dashboard"]
          })
      )
    );

  @Effect({ dispatch: false })
  loginFail$ = this.actions$.ofType(userActions.LOGIN_FAIL).pipe(
    switchMap(action => {
      return this.store
        .select(fromSelectors.selectAuthError)
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
      this.authService.logout();
      return new fromRouter.Go({
        path: ["/login"]
      });
    })
  );

  @Effect()
  saveUserSettings$ = this.actions$.ofType(userActions.SAVE_USER_SETTINGS).pipe(
    map((action: userActions.SaveUserSettings) => action.payload),
    switchMap(userSettings =>
      this.authService.saveUserSettings(userSettings).pipe(
        map(settings => new userActions.SaveUserSettingsSuccess(settings)),
        catchError(error => of(new userActions.SaveUserSettingsFail(error)))
      )
    )
  );
}
