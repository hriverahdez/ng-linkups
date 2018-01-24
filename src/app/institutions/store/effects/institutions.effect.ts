import { Injectable } from "@angular/core";

import { of } from "rxjs/observable/of";
import { catchError, switchMap, map } from "rxjs/operators";

import { Effect, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromStore from "../../store";
import * as institutionActions from "../actions";
import * as fromServices from "../../services";
import * as fromSharedServices from "../../../@shared/services";

import { Institution } from "../../models/institution.model";

@Injectable()
export class InstitutionEffects {
  constructor(
    private actions$: Actions,
    private rootStore: Store<fromRoot.AppState>,
    private store: Store<fromStore.InstitutionsState>,
    private institutionsService: fromServices.InstitutionsService,
    private snackbar: fromSharedServices.SnackBarService
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
  deleteInstitution$ = this.actions$
    .ofType(institutionActions.DELETE_INSTITUTION)
    .pipe(
      map((action: institutionActions.DeleteInstitution) => action.payload),
      switchMap(institution =>
        this.institutionsService
          .delete(institution)
          .pipe(
            map(
              () => new institutionActions.DeleteInstitutionSuccess(institution)
            ),
            catchError(error =>
              of(new institutionActions.DeleteInstitutionFail(error))
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

  @Effect({ dispatch: false })
  handleInstitutionFailure$ = this.actions$
    .ofType(
      institutionActions.ADD_INSTITUTION_FAIL,
      institutionActions.UPDATE_INSTITUTION_FAIL,
      institutionActions.DELETE_INSTITUTION_FAIL
    )
    .pipe(
      map(() =>
        this.store
          .select(fromStore.getInstitutionsError)
          .pipe(map(error => this.snackbar.openSimpleSnackBar(error.message)))
      )
    );
}
