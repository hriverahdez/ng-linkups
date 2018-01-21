import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Store } from "@ngrx/store";
import * as fromStore from "../store";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap, map, switchMap, filter, take, catchError } from "rxjs/operators";

@Injectable()
export class InstitutionsGuard implements CanActivate {
  constructor(private store: Store<fromStore.InstitutionsState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getInstitutionsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadInstitutions());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
