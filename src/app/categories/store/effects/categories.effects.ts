import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";

import { of } from "rxjs/observable/of";
import { catchError, switchMap, map } from "rxjs/operators";

import * as fromServices from "../../services/";

import * as categoryActions from "../actions";

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoriesService: fromServices.CategoriesService
  ) {}

  @Effect()
  categories$ = this.actions$
    .ofType(categoryActions.LOAD_CATEGORIES)
    .pipe(
      switchMap(() =>
        this.categoriesService
          .getAllCategories()
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
}
