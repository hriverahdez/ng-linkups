import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import { catchError, switchMap, map } from "rxjs/operators";

import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromStore from "../../store";
import * as subnetActions from "../actions";
import * as fromServices from "../../services";
import * as fromSharedServices from "../../../@shared/services";

import { Subnet } from "../../models/subnet.model";

@Injectable()
export class SubnetsEffects {
  constructor(
    private actions$: Actions,
    private rootStore: Store<fromRoot.AppState>,
    private store: Store<fromStore.SubnetsState>,
    private subnetsService: fromServices.SubnetsService,
    private snackbar: fromSharedServices.SnackBarService
  ) {}

  @Effect()
  subnets$ = this.actions$
    .ofType(subnetActions.LOAD_SUBNETS)
    .pipe(
      switchMap(() => this.subnetsService.getAll()),
      map(subnets => new subnetActions.LoadSubnetsSuccess(subnets)),
      catchError(error => of(new subnetActions.LoadSubnetsFail(error)))
    );

  // @Effect()
  // createInstitution$ = this.actions$
  //   .ofType(subnetActions.)
  //   .pipe(
  //     map((action: subnetActions.AddInstitution) => action.payload),
  //     switchMap(institution =>
  //       this.subnetsService
  //         .add(institution)
  //         .pipe(
  //           map(
  //             newInst => new subnetActions.AddInstitutionSuccess(newInst)
  //           ),
  //           catchError(error =>
  //             of(new subnetActions.AddInstitutionFail(error))
  //           )
  //         )
  //     )
  //   );

  // @Effect()
  // updateInstitution$ = this.actions$
  //   .ofType(subnetActions.UPDATE_INSTITUTION)
  //   .pipe(
  //     map((action: subnetActions.UpdateInstitution) => action.payload),
  //     switchMap((institution: Institution) =>
  //       this.subnetsService
  //         .update(institution)
  //         .pipe(
  //           map(
  //             institution =>
  //               new subnetActions.UpdateInstitutionSuccess(institution)
  //           ),
  //           catchError(error =>
  //             of(new subnetActions.UpdateInstitutionFail(error))
  //           )
  //         )
  //     )
  //   );

  // @Effect()
  // deleteInstitution$ = this.actions$
  //   .ofType(subnetActions.DELETE_INSTITUTION)
  //   .pipe(
  //     map((action: subnetActions.DeleteInstitution) => action.payload),
  //     switchMap(institution =>
  //       this.subnetsService
  //         .delete(institution)
  //         .pipe(
  //           map(
  //             () => new subnetActions.DeleteInstitutionSuccess(institution)
  //           ),
  //           catchError(error =>
  //             of(new subnetActions.DeleteInstitutionFail(error))
  //           )
  //         )
  //     )
  //   );

  // @Effect()
  // handleInstitutionSuccess$ = this.actions$
  //   .ofType(
  //     subnetActions.ADD_INSTITUTION_SUCCESS,
  //     subnetActions.UPDATE_INSTITUTION_SUCCESS
  //   )
  //   .pipe(map(() => new fromRoot.Go({ path: ["/app/institutions"] })));

  // @Effect({ dispatch: false })
  // handleInstitutionFailure$ = this.actions$
  //   .ofType(
  //     subnetActions.ADD_INSTITUTION_FAIL,
  //     subnetActions.UPDATE_INSTITUTION_FAIL,
  //     subnetActions.DELETE_INSTITUTION_FAIL
  //   )
  //   .pipe(
  //     map(() =>
  //       this.store
  //         .select(fromStore.getInstitutionsError)
  //         .pipe(map(error => this.snackbar.openSimpleSnackBar(error.message)))
  //     )
  //   );
}
