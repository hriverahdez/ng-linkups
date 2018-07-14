import { Injectable } from "@angular/core";

import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import * as settingsActions from "../actions";
import * as fromFeature from "../reducers";
import * as fromSelectors from "../selectors";

import { Store } from "@ngrx/store";
import { SnackBarService } from "../../../@shared/utility/snack-bar.service";
import { SettingsService } from "../../services/settings.service";

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromFeature.AppState>,
    private settingsService: SettingsService,
    private snackbar: SnackBarService
  ) {}

  @Effect()
  appSettings$ = this.actions$.ofType(settingsActions.LOAD_APP_SETTINGS).pipe(
    switchMap(() => this.settingsService.getOne("")),
    map(appSettings => new settingsActions.LoadAppSettingsSuccess(appSettings)),
    catchError(error => of(new settingsActions.LoadAppSettingsFail(error)))
  );

  //   @Effect()
  //   saveAppSettings$ = this.actions$
  //     .ofType(settingsActions.SAVE_APP_SETTINGS)
  //     .pipe(
  //       map((action: settingsActions.SaveAppSettings) => action.payload),
  //       switchMap(appSettings =>
  //         this.settingsService.add(appSettings).pipe(
  //           map(
  //             appSettings =>
  //               new settingsActions.SaveAppSettingsSuccess(appSettings)
  //           ),
  //           catchError(error =>
  //             of(new settingsActions.SaveAppSettingsFail(error))
  //           )
  //         )
  //       )
  //     );

  //   @Effect()
  //   saveUserSettings$ = this.actions$
  //     .ofType(settingsActions.SAVE_USER_SETTINGS)
  //     .pipe(
  //       map((action: settingsActions.SaveUserSettings) => action.payload),
  //       switchMap(userSettings =>
  //         this.settingsService.saveUserSettings(userSettings).pipe(
  //           map(
  //             settings => new settingsActions.SaveUserSettingsSuccess(settings)
  //           ),
  //           catchError(error =>
  //             of(new settingsActions.SaveUserSettingsFail(error))
  //           )
  //         )
  //       )
  //     );

  //   @Effect({ dispatch: false })
  //   handleInstitutionFailure$ = this.actions$
  //     .ofType(settingsActions.SAVE_APP_SETTINGS_FAIL)
  //     .pipe(
  //       switchMap(() =>
  //         this.store.select(fromSelectors.getAppSettingsError).pipe(
  //           tap(error => {
  //             this.snackbar.openSimpleSnackBar(error.message);
  //           })
  //         )
  //       )
  //     );

  //   @Effect({ dispatch: false })
  //   saveSettingsSuccess$ = this.actions$
  //     .ofType(settingsActions.SAVE_APP_SETTINGS)
  //     .pipe(
  //       tap(() => {
  //         this.snackbar.openSimpleSnackBar(
  //           "Configuración guardada exitosamente",
  //           "Cerrar"
  //         );
  //       })
  //     );
}
