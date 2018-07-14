import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromAuth from "./auth/store";
import { AuthenticationService } from "./auth/services";

@Injectable({
  providedIn: "root"
})
export class AppSandbox {
  constructor(
    private authStore$: Store<fromAuth.AuthState>,
    private authService: AuthenticationService
  ) {}

  public loadUser(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.authStore$.dispatch(new fromAuth.SetUser(user));
    }
  }
}
