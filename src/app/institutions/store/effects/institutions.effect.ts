import { Injectable } from "@angular/core";

import { of } from "rxjs/observable/of";
import { catchError, switchMap, map } from "rxjs/operators";

import { Effect, Actions } from "@ngrx/effects";

import * as institutionActions from "../actions";
import * as fromServices from "../../services";
import { Action } from "rxjs/scheduler/Action";

@Injectable()
export class InstitutionEffects {
  constructor(
    private actions$: Actions,
    private institutionsService: fromServices.InstitutionsService
  ) {}

  @Effect()
  institutions$ = this.actions$
    .ofType(institutionActions.LOAD_INSTITUTIONS)
    .pipe(
      switchMap(() => this.institutionsService.getInstitutions()),
      map(
        institutions =>
          new institutionActions.LoadInstitutionsSuccess(institutions)
      ),
      catchError(error =>
        of(new institutionActions.LoadInstitutionsFail(error))
      )
    );
}
