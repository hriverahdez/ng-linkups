import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Store } from "@ngrx/store";
import * as fromStore from "../store";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class UserSessionNotExpiredGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.AuthState>,
    private authService: AuthenticationService
  ) {}

  canActivate(): Observable<boolean> {
    return this.checkStore();
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.selectCurrentUser).pipe(
      map(user => {
        const inStore = user && user.name;
        if (inStore) return false;
        return this.authService.isAuthenticated();
      }),
      map(isLoggedIn => {
        if (isLoggedIn) {
          const user = this.authService.getCurrentUser();
          this.store.dispatch(new fromStore.SetUser(user));
        }
        return true;
      })
    );
  }
}
