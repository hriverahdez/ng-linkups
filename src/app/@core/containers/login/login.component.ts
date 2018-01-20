import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

@Component({
  selector: "lnk-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<fromStore.AppState>) {}

  isLoading$: Observable<boolean>;

  ngOnInit() {
    this.isLoading$ = this.store.select(fromStore.getLoginLoading);
  }

  login(credentials) {
    this.store.dispatch(new fromStore.Login(credentials));
  }
}
