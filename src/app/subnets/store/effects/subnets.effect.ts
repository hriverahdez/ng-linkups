import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import { of } from "rxjs";
import { catchError, switchMap, map } from "rxjs/operators";

import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromLayout from "../../../@layout/store";

import * as fromFeature from "../reducers";
import * as fromSelectors from "../selectors";
import * as subnetActions from "../actions";

import * as fromServices from "../../services";
import * as fromSharedServices from "../../../@shared/services";

import { Subnet } from "../../models/subnet.model";

@Injectable()
export class SubnetsEffects {
  constructor(
    private actions$: Actions,
    private rootStore: Store<fromRoot.AppState>,
    private layoutStore: Store<fromLayout.LayoutState>,
    private store: Store<fromFeature.SubnetsState>,
    private subnetsService: fromServices.SubnetsService,
    private snackbar: fromSharedServices.SnackBarService
  ) {}

  @Effect()
  subnets$ = this.actions$.ofType(subnetActions.LOAD_SUBNETS).pipe(
    switchMap(() => this.subnetsService.getAll()),
    map(subnets => new subnetActions.LoadSubnetsSuccess(subnets)),
    catchError(error => of(new subnetActions.LoadSubnetsFail(error)))
  );

  @Effect()
  createSubnet$ = this.actions$.ofType(subnetActions.ADD_SUBNET).pipe(
    map((action: subnetActions.AddSubnet) => action.payload),
    switchMap(subnet =>
      this.subnetsService.add(subnet).pipe(
        map(newSubnet => new subnetActions.AddSubnetSuccess(newSubnet)),
        catchError(error => of(new subnetActions.AddSubnetFail(error)))
      )
    )
  );

  @Effect()
  createSubnetFromModal$ = this.actions$
    .ofType(subnetActions.ADD_SUBNET_FROM_MODAL)
    .pipe(
      map((action: subnetActions.AddSubnetFromModal) => action.payload),
      switchMap(subnet =>
        this.subnetsService.add(subnet).pipe(
          map(
            newSubnet => new subnetActions.AddSubnetFromModalSuccess(newSubnet)
          ),
          catchError(error =>
            of(new subnetActions.AddSubnetFromModalFail(error))
          )
        )
      )
    );

  @Effect()
  createSubnetRange$ = this.actions$
    .ofType(subnetActions.ADD_SUBNET_RANGE)
    .pipe(
      map((action: subnetActions.AddSubnetRange) => action.payload),
      switchMap(data =>
        this.subnetsService.addSubnetRange(data).pipe(
          map(subnets => new subnetActions.AddSubnetRangeSuccess(subnets)),
          catchError(error => of(new subnetActions.AddSubnetRangeFail(error)))
        )
      )
    );

  @Effect()
  updateSubnet$ = this.actions$.ofType(subnetActions.UPDATE_SUBNET).pipe(
    map((action: subnetActions.UpdateSubnet) => action.payload),
    switchMap((subnet: Subnet) =>
      this.subnetsService.update(subnet).pipe(
        map(subnet => new subnetActions.UpdateSubnetSuccess(subnet)),
        catchError(error => of(new subnetActions.UpdateSubnetFail(error)))
      )
    )
  );

  @Effect()
  deleteSubnet$ = this.actions$.ofType(subnetActions.DELETE_SUBNET).pipe(
    map((action: subnetActions.DeleteSubnet) => action.payload),
    switchMap(subnet =>
      this.subnetsService.delete(subnet).pipe(
        map(() => new subnetActions.DeleteSubnetSuccess(subnet)),
        catchError(error => of(new subnetActions.DeleteSubnetFail(error)))
      )
    )
  );

  @Effect()
  handleSubnetSuccess$ = this.actions$
    .ofType(
      subnetActions.ADD_SUBNET_SUCCESS,
      subnetActions.ADD_SUBNET_RANGE_SUCCESS,
      subnetActions.UPDATE_SUBNET_SUCCESS
    )
    .pipe(map(() => new fromRoot.Go({ path: ["/app/subnets"] })));

  @Effect({ dispatch: false })
  handleSubnetFailure$ = this.actions$
    .ofType(
      subnetActions.ADD_SUBNET_FAIL,
      subnetActions.ADD_SUBNET_FROM_MODAL_FAIL,
      subnetActions.ADD_SUBNET_RANGE_FAIL,
      subnetActions.UPDATE_SUBNET_FAIL,
      subnetActions.DELETE_SUBNET_FAIL
    )
    .pipe(
      map(() =>
        this.store
          .select(fromSelectors.getSubnetsError)
          .pipe(map(error => this.snackbar.openSimpleSnackBar(error.message)))
      )
    );

  @Effect()
  appLoadingStart$ = this.actions$
    .ofType(
      subnetActions.LOAD_SUBNETS,
      subnetActions.ADD_SUBNET,
      subnetActions.UPDATE_SUBNET,
      subnetActions.DELETE_SUBNET
    )
    .pipe(
      map(action => {
        return new fromLayout.ShowLoader();
      })
    );

  @Effect()
  appLoadingDone$ = this.actions$
    .ofType(
      subnetActions.LOAD_SUBNETS_FAIL,
      subnetActions.LOAD_SUBNETS_SUCCESS,
      subnetActions.ADD_SUBNET_FAIL,
      subnetActions.ADD_SUBNET_SUCCESS,
      subnetActions.UPDATE_SUBNET_FAIL,
      subnetActions.UPDATE_SUBNET_SUCCESS,
      subnetActions.DELETE_SUBNET_FAIL,
      subnetActions.DELETE_SUBNET_SUCCESS
    )
    .pipe(
      map(action => {
        return new fromLayout.HideLoader();
      })
    );
}
