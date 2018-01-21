import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { map, take, filter, switchMap, tap } from "rxjs/operators";

import * as fromStore from "../store";

@Injectable()
export class CategoryExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.CategoriesState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => this.hasCategory(route.params.categoryId))
    );
  }

  hasCategory(id: string): Observable<boolean> {
    return this.store
      .select(fromStore.getCategoriesEntities)
      .pipe(map(entities => !!entities[id]), take(1));
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getCategoriesLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadCategories());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
