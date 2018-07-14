import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/root-store";
import * as fromStore from "../../store";
import { AuthSandbox } from "../../auth.sandbox";

@Component({
  selector: "lnk-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  canRegister$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private sb: AuthSandbox) {}

  ngOnInit() {
    // this.settingsStore.dispatch(new fromRoot.LoadAppSettings());
    this.canRegister$ = this.sb.canRegister$;
    this.isLoading$ = this.sb.authLoading$;
  }

  login(credentials) {
    this.sb.login(credentials);
  }
}
