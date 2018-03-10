import { Injectable } from "@angular/core";

import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import * as appSettingsActions from "../actions";
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
    .ofType(appSettingsActions.LOAD_APP_SETTINGS)
    .pipe(
      switchMap(() => this.settingsService.getOne("")),
      map(
        appSettings =>
          new appSettingsActions.LoadAppSettingsSuccess(appSettings)
      ),
      catchError(error => of(new appSettingsActions.LoadAppSettingsFail(error)))
    );

  @Effect()
  saveAppSettings$ = this.actions$
    .ofType(appSettingsActions.SAVE_APP_SETTINGS)
    .pipe(
      map((action: appSettingsActions.SaveAppSettings) => action.payload),
      switchMap(appSettings =>
        this.settingsService
          .add(appSettings)
          .pipe(
            map(
              appSettings =>
                new appSettingsActions.SaveAppSettingsSuccess(appSettings)
            ),
            catchError(error =>
              of(new appSettingsActions.SaveAppSettingsFail(error))
            )
          )
      )
    );

  @Effect({ dispatch: false })
  handleInstitutionFailure$ = this.actions$
    .ofType(appSettingsActions.SAVE_APP_SETTINGS_FAIL)
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
  //     appSettingsActions.LOAD_INSTITUTIONS,
  //     appSettingsActions.ADD_INSTITUTION,
  //     appSettingsActions.UPDATE_INSTITUTION,
  //     appSettingsActions.DELETE_INSTITUTION
  //   )
  //   .pipe(
  //     map(action => {
  //       return new fromLayout.ShowLoader();
  //     })
  //   );

  // @Effect()
  // appLoadingDone$ = this.actions$
  //   .ofType(
  //     appSettingsActions.LOAD_INSTITUTIONS_FAIL,
  //     appSettingsActions.LOAD_INSTITUTIONS_SUCCESS,
  //     appSettingsActions.ADD_INSTITUTION_FAIL,
  //     appSettingsActions.ADD_INSTITUTION_SUCCESS,
  //     appSettingsActions.UPDATE_INSTITUTION_FAIL,
  //     appSettingsActions.UPDATE_INSTITUTION_SUCCESS,
  //     appSettingsActions.DELETE_INSTITUTION_FAIL,
  //     appSettingsActions.DELETE_INSTITUTION_SUCCESS
  //   )
  //   .pipe(
  //     map(action => {
  //       return new fromLayout.HideLoader();
  //     })
  //   );
}
