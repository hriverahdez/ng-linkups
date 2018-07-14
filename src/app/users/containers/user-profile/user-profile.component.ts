import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromAuth from "../../../auth/store";
import { Observable } from "rxjs";
import { User } from "../../../@shared/models";

@Component({
  selector: "lnk-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  currentUser$: Observable<User>;
  constructor(private rootStore: Store<fromAuth.AuthState>) {}

  ngOnInit() {
    this.currentUser$ = this.rootStore.select(fromAuth.selectCurrentUser);
  }
}
