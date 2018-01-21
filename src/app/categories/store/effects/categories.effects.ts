import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";

import { of } from "rxjs/observable/of";
import { catchError, switchMap, map } from "rxjs/operators";

import * as fromServices from "../../services/";

import * as categoryActions from "../actions";

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.AppState>,
    private categoriesService: fromServices.CategoriesService
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
  handleCategorySuccess$ = this.actions$
    .ofType(
      categoryActions.ADD_CATEGORY_SUCCESS,
      categoryActions.UPDATE_CATEGORY_SUCCESS
    )
    .pipe(map(() => new fromRoot.Go({ path: ["/app/categories"] })));
}
