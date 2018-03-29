import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../@core/store";
import * as fromSettings from "../../settings/store";
import { filter, map } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class RegistrationGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.AppState>,
    private settingsStore: Store<fromSettings.SettingsState>
  ) {}

  canActivate(): Observable<boolean> {
    return this.settingsStore
      .select(fromSettings.selectRegistrationEnabled)
      .pipe(
        map(canRegister => {
          if (!canRegister) {
            this.store.dispatch(
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
