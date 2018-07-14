import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/root-store";
import * as fromStore from "../../store";

@Component({
  selector: "lnk-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  canRegister$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private store: Store<fromStore.AuthState>
  ) {}

  ngOnInit() {
    // this.settingsStore.dispatch(new fromRoot.LoadAppSettings());
    // this.canRegister$ = this.settingsStore.select(
    //   fromRoot.selectRegistrationEnabled
    // );
    this.isLoading$ = this.store.select(fromStore.selectAuthLoading);
  }

  login(credentials) {
    this.store.dispatch(new fromStore.Login(credentials));
  }
}
