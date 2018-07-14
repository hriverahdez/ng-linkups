import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";

import * as fromStore from "../../store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "lnk-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromStore.getLoginLoading);
  }

  register(user: User) {
    this.store.dispatch(new fromStore.Register(user));
  }
}
