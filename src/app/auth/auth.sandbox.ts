import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromRoot from "../@core/root-store";
import * as fromStore from "./store";
import { Observable } from "rxjs";
import { User } from "../@shared/models";

// TODO: Maybe provide in module providers []
@Injectable({
  providedIn: "root"
})
export class AuthSandbox {
  authLoading$: Observable<boolean> = this.store.select(
    fromStore.selectAuthLoading
  );

  canRegister$: Observable<boolean> = this.store.select(
    fromRoot.selectRegistrationEnabled
  );

  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private store: Store<fromStore.AuthState>
  ) {
    this.store.dispatch(new fromRoot.LoadAppSettings());
  }

  login(credentials) {
    this.store.dispatch(new fromStore.Login(credentials));
  }

  register(user: User) {
    this.store.dispatch(new fromStore.Register(user));
  }
}
