import { Injectable } from "@angular/core";

import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import { switchMap, map, catchError } from "rxjs/operators";

import * as appSettingsActions from "../actions";
import { SettingsService } from "../../services";

@Injectable()
export class AppSettingsEffects {
  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
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
}
