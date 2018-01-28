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

  @Effect()
  createSubnet$ = this.actions$
    .ofType(subnetActions.ADD_SUBNET)
    .pipe(
      map((action: subnetActions.AddSubnet) => action.payload),
      switchMap(subnet =>
        this.subnetsService
          .add(subnet)
          .pipe(
            map(newSubnet => new subnetActions.AddSubnetSuccess(newSubnet)),
            catchError(error => of(new subnetActions.AddSubnetFail(error)))
          )
      )
    );

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

  @Effect()
  deleteSubnet$ = this.actions$
    .ofType(subnetActions.DELETE_SUBNET)
    .pipe(
      map((action: subnetActions.DeleteSubnet) => action.payload),
      switchMap(subnet =>
        this.subnetsService
          .delete(subnet)
          .pipe(
            map(() => new subnetActions.DeleteSubnetSuccess(subnet)),
            catchError(error => of(new subnetActions.DeleteSubnetFail(error)))
          )
      )
    );

  @Effect()
  handleSubnetSuccess$ = this.actions$
    .ofType(
      subnetActions.ADD_SUBNET_SUCCESS
      // subnetActions.UPDATE_SUBNET_SUCCESS
    )
    .pipe(map(() => new fromRoot.Go({ path: ["/app/subnets"] })));

  @Effect({ dispatch: false })
  handleInstitutionFailure$ = this.actions$
    .ofType(
      subnetActions.ADD_SUBNET_FAIL,
      // subnetActions.UPDATE_INSTITUTION_FAIL,
      subnetActions.DELETE_SUBNET_FAIL
    )
    .pipe(
      map(() =>
        this.store
          .select(fromStore.getSubnetsError)
          .pipe(map(error => this.snackbar.openSimpleSnackBar(error.message)))
      )
    );
}
