import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import { User } from "../../../@core/models/user.model";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "lnk-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  currentUser$: Observable<User>;
  constructor(private rootStore: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.currentUser$ = this.rootStore.select(fromRoot.getCurrentUser);
  }
}
