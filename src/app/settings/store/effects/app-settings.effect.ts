import { Injectable } from "@angular/core";

import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import * as settingsActions from "../actions";
import * as fromFeature from "../reducers";
import * as fromSelectors from "../selectors";
import * as fromRoot from "../../../@core/store";

import { SettingsService } from "../../services";
import * as fromSharedServices from "../../../@shared/services";

import { Store } from "@ngrx/store";

@Injectable()
export class AppSettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromFeature.SettingsState>,
    private settingsService: SettingsService,
    private snackbar: fromSharedServices.SnackBarService
  ) {}

  @Effect()
  appSettings$ = this.actions$
    .ofType(settingsActions.LOAD_APP_SETTINGS)
    .pipe(
      switchMap(() => this.settingsService.getOne("")),
      map(
        appSettings => new settingsActions.LoadAppSettingsSuccess(appSettings)
      ),
      catchError(error => of(new settingsActions.LoadAppSettingsFail(error)))
    );

  @Effect()
  saveAppSettings$ = this.actions$
    .ofType(settingsActions.SAVE_APP_SETTINGS)
    .pipe(
      map((action: settingsActions.SaveAppSettings) => action.payload),
      switchMap(appSettings =>
        this.settingsService
          .add(appSettings)
          .pipe(
            map(
              appSettings =>
                new settingsActions.SaveAppSettingsSuccess(appSettings)
            ),
            catchError(error =>
              of(new settingsActions.SaveAppSettingsFail(error))
            )
          )
      )
    );

  @Effect()
  saveUserSettings$ = this.actions$
    .ofType(settingsActions.SAVE_USER_SETTINGS)
    .pipe(
      map((action: settingsActions.SaveUserSettings) => action.payload),
      switchMap(userSettings =>
        this.settingsService
          .saveUserSettings(userSettings)
          .pipe(
            map(
              settings => new settingsActions.SaveUserSettingsSuccess(settings)
            ),
            catchError(error =>
              of(new settingsActions.SaveUserSettingsFail(error))
            )
          )
      )
    );

  @Effect({ dispatch: false })
  handleInstitutionFailure$ = this.actions$
    .ofType(settingsActions.SAVE_APP_SETTINGS_FAIL)
    .pipe(
      switchMap(() =>
        this.store.select(fromSelectors.getAppSettingsError).pipe(
          tap(error => {
            this.snackbar.openSimpleSnackBar(error.message);
          })
        )
      )
    );

  // @Effect()
  // appLoadingStart$ = this.actions$
  //   .ofType(
  //     settingsActions.LOAD_INSTITUTIONS,
  //     settingsActions.ADD_INSTITUTION,
  //     settingsActions.UPDATE_INSTITUTION,
  //     settingsActions.DELETE_INSTITUTION
  //   )
  //   .pipe(
  //     map(action => {
  //       return new fromLayout.ShowLoader();
  //     })
  //   );

  // @Effect()
  // appLoadingDone$ = this.actions$
  //   .ofType(
  //     settingsActions.LOAD_INSTITUTIONS_FAIL,
  //     settingsActions.LOAD_INSTITUTIONS_SUCCESS,
  //     settingsActions.ADD_INSTITUTION_FAIL,
  //     settingsActions.ADD_INSTITUTION_SUCCESS,
  //     settingsActions.UPDATE_INSTITUTION_FAIL,
  //     settingsActions.UPDATE_INSTITUTION_SUCCESS,
  //     settingsActions.DELETE_INSTITUTION_FAIL,
  //     settingsActions.DELETE_INSTITUTION_SUCCESS
  //   )
  //   .pipe(
  //     map(action => {
  //       return new fromLayout.HideLoader();
  //     })
  //   );
}
