import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import * as fromSettings from "../../../settings/store";

@Component({
  selector: "lnk-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  canRegister$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.AppState>,
    private settingsStore: Store<fromSettings.SettingsState>
  ) {}

  ngOnInit() {
    this.settingsStore.dispatch(new fromSettings.LoadAppSettings());
    this.canRegister$ = this.settingsStore.select(
      fromSettings.selectRegistrationEnabled
    );
    this.isLoading$ = this.store.select(fromStore.getLoginLoading);
  }

  login(credentials) {
    this.store.dispatch(new fromStore.Login(credentials));
  }
}
