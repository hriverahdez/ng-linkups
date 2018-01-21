import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap, filter, switchMap, take, catchError } from "rxjs/operators";

import * as fromStore from "../store";

@Injectable()
export class CategoriesGuard implements CanActivate {
  constructor(private store: Store<fromStore.CategoriesState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
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
