import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromLayout from "../../../@layout/store";

import { of } from "rxjs/observable/of";
import { catchError, switchMap, map, tap } from "rxjs/operators";

import * as fromServices from "../../services/";
import * as fromSharedServices from "../../../@shared/services";
import * as fromFeature from "../reducers";
import * as fromSelectors from "../selectors";
import * as categoryActions from "../actions";

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private rootStore: Store<fromRoot.AppState>,
    private layoutStore: Store<fromLayout.LayoutState>,
    private store: Store<fromFeature.CategoriesState>,
    private categoriesService: fromServices.CategoriesService,
    private snackbar: fromSharedServices.SnackBarService
  ) {}

  @Effect()
  categories$ = this.actions$
    .ofType(categoryActions.LOAD_CATEGORIES)
    .pipe(
      switchMap(() =>
        this.categoriesService
          .getAll()
          .pipe(
            map(
              categories =>
                new categoryActions.LoadCategoriesSuccess(categories)
            ),
            catchError(error =>
              of(new categoryActions.LoadCategoriesFail(error))
            )
          )
      )
    );

  @Effect()
  createCategory$ = this.actions$.ofType(categoryActions.ADD_CATEGORY).pipe(
    map((action: categoryActions.AddCategory) => action.payload),
    switchMap(category => {
      return this.categoriesService
        .add(category)
        .pipe(
          map(category => new categoryActions.AddCategorySuccess(category)),
          catchError(error => of(new categoryActions.AddCategoryFail(error)))
        );
    })
  );

  @Effect()
  updateCategory$ = this.actions$
    .ofType(categoryActions.UPDATE_CATEGORY)
    .pipe(
      map((action: categoryActions.UpdateCategory) => action.payload),
      switchMap(category =>
        this.categoriesService
          .update(category)
          .pipe(
            map(() => new categoryActions.UpdateCategorySuccess(category)),
            catchError(error =>
              of(new categoryActions.UpdateCategoryFail(error))
            )
          )
      )
    );

  @Effect()
  deleteCategory$ = this.actions$
    .ofType(categoryActions.DELETE_CATEGORY)
    .pipe(
      map((action: categoryActions.DeleteCategory) => action.payload),
      switchMap(category =>
        this.categoriesService
          .delete(category)
          .pipe(
            map(() => new categoryActions.DeleteCategorySuccess(category)),
            catchError(error =>
              of(new categoryActions.DeleteCategoryFail(error))
            )
          )
      )
    );

  @Effect()
  handleCategorySuccess$ = this.actions$
    .ofType(
      categoryActions.ADD_CATEGORY_SUCCESS,
      categoryActions.UPDATE_CATEGORY_SUCCESS
    )
    .pipe(map(() => new fromRoot.Go({ path: ["/app/categories"] })));

  @Effect({ dispatch: false })
  handleCategoryFailure$ = this.actions$
    .ofType(
      categoryActions.ADD_CATEGORY_FAIL,
      categoryActions.UPDATE_CATEGORY_FAIL,
      categoryActions.DELETE_CATEGORY_FAIL
    )
    .pipe(
      switchMap(() =>
        this.store.select(fromSelectors.getCategoriesError).pipe(
          tap(error => {
            this.snackbar.openSimpleSnackBar(error.message);
          })
        )
      )
    );

  @Effect()
  appLoadingStart$ = this.actions$
    .ofType(
      categoryActions.LOAD_CATEGORIES,
      categoryActions.ADD_CATEGORY,
      categoryActions.UPDATE_CATEGORY,
      categoryActions.DELETE_CATEGORY
    )
    .pipe(
      map(action => {
        return new fromLayout.ShowLoader();
      })
    );

  @Effect()
  appLoadingDone$ = this.actions$
    .ofType(
      categoryActions.LOAD_CATEGORIES_FAIL,
      categoryActions.LOAD_CATEGORIES_SUCCESS,
      categoryActions.ADD_CATEGORY_FAIL,
      categoryActions.ADD_CATEGORY_SUCCESS,
      categoryActions.UPDATE_CATEGORY_FAIL,
      categoryActions.UPDATE_CATEGORY_SUCCESS,
      categoryActions.DELETE_CATEGORY_FAIL,
      categoryActions.DELETE_CATEGORY_SUCCESS
    )
    .pipe(
      map(action => {
        return new fromLayout.HideLoader();
      })
    );
}
