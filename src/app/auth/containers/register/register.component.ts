import { Component, OnInit } from "@angular/core";

import * as fromStore from "../../store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { User } from "../../../@shared/models";

@Component({
  selector: "lnk-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private store: Store<fromStore.AuthState>) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromStore.selectAuthLoading);
  }

  register(user: User) {
    this.store.dispatch(new fromStore.Register(user));
  }
}
