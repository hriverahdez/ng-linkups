import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import { User } from "../../../@core/models/user.model";
import { DropdownItem } from "../../utils/dropdown";

@Component({
  selector: "lnk-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  private notifItems = [
    {
      text: "Mike John responded to your email"
    },
    {
      text: "You have 5 new tasks"
    },
    {
      text: "You're now friend with Andrew"
    },
    {
      text: "Another Notification"
    },
    {
      text: "Another One"
    }
  ];

  private profileItems = [
    {
      id: "PROFILE",
      text: "My Profile"
    },
    {
      id: "LOGOUT",
      text: "Log out"
    }
  ];

  currentUser$: Observable<User>;

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.currentUser$ = this.store.select(fromRoot.getCurrentUser);
  }

  onUserMenuClick(item: DropdownItem) {
    if (item.id === "LOGOUT") {
      this.store.dispatch(new fromRoot.Logout());
    }
  }
}
