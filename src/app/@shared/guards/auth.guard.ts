import { Injectable } from "@angular/core";

import { CanActivate } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromRoot from "../../@core/root-store";
import { AuthenticationService } from "../../auth/services";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.AppState>,
    private authService: AuthenticationService
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.store.dispatch(
        new fromRoot.Go({
          path: ["/login"]
        })
      );
      return false;
    }
  }
}
