import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../@core/root-store";
import { map } from "rxjs/operators";

@Injectable()
export class RegistrationGuard implements CanActivate {
  constructor(private rootStore: Store<fromRoot.AppState>) {}

  canActivate(): Observable<boolean> {
    return this.rootStore.select(fromRoot.selectRegistrationEnabled).pipe(
      map(canRegister => {
        if (!canRegister) {
          this.rootStore.dispatch(
            new fromRoot.Go({
              path: ["/login"]
            })
          );
          return false;
        } else return true;
      })
    );
  }
}
