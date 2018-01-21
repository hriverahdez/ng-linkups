import { Injectable } from "@angular/core";

import { of } from "rxjs/observable/of";
import { catchError, switchMap, map } from "rxjs/operators";

import { Effect, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";

import * as institutionActions from "../actions";
import * as fromServices from "../../services";
import { Action } from "rxjs/scheduler/Action";
import { Institution } from "../../models/institution.model";

@Injectable()
export class InstitutionEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.AppState>,
    private institutionsService: fromServices.InstitutionsService
  ) {}

  @Effect()
  institutions$ = this.actions$
    .ofType(institutionActions.LOAD_INSTITUTIONS)
    .pipe(
      switchMap(() => this.institutionsService.getAll()),
      map(
        institutions =>
          new institutionActions.LoadInstitutionsSuccess(institutions)
      ),
      catchError(error =>
        of(new institutionActions.LoadInstitutionsFail(error))
      )
    );

  @Effect()
  createInstitution$ = this.actions$
    .ofType(institutionActions.ADD_INSTITUTION)
    .pipe(
      map((action: institutionActions.AddInstitution) => action.payload),
      switchMap(institution =>
        this.institutionsService
          .add(institution)
          .pipe(
            map(
              newInst => new institutionActions.AddInstitutionSuccess(newInst)
            ),
            catchError(error =>
              of(new institutionActions.AddInstitutionFail(error))
            )
          )
      )
    );

  @Effect()
  updateInstitution$ = this.actions$
    .ofType(institutionActions.UPDATE_INSTITUTION)
    .pipe(
      map((action: institutionActions.UpdateInstitution) => action.payload),
      switchMap((institution: Institution) =>
        this.institutionsService
          .update(institution)
          .pipe(
            map(
              institution =>
                new institutionActions.UpdateInstitutionSuccess(institution)
            ),
            catchError(error =>
              of(new institutionActions.UpdateInstitutionFail(error))
            )
          )
      )
    );

  @Effect()
  handleInstitutionSuccess$ = this.actions$
    .ofType(
      institutionActions.ADD_INSTITUTION_SUCCESS,
      institutionActions.UPDATE_INSTITUTION_SUCCESS
    )
    .pipe(map(() => new fromRoot.Go({ path: ["/app/institutions"] })));
}
