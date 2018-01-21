import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from "@ngrx/store";
import * as fromStore from "../store";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap, map, switchMap, filter, take, catchError } from "rxjs/operators";

@Injectable()
export class InstitutionExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.InstitutionsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => this.hasInstitution(route.params.institutionId))
    );
  }

  hasInstitution(id: string): Observable<boolean> {
    return this.store
      .select(fromStore.getInstitutionsEntities)
      .pipe(map(entities => !!entities[id]), take(1));
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
