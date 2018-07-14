import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/store";
import * as fromLayout from "../../../@layout/store";
import * as fromSettings from "../../../settings/store";
import { User } from "../../../@core/models/user.model";
import { DropdownItem } from "../../utils/dropdown";
import { AppSettings } from "../../../settings/models/app-settings.model";

@Component({
  selector: "lnk-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  profileItems: DropdownItem[] = [
    {
      id: "PROFILE",
      text: "My Profile",
      url: "/app/users/profile"
    },
    {
      id: "LOGOUT",
      text: "Log out"
    }
  ];

  appSettings$: Observable<AppSettings>;

  currentUser$: Observable<User>;

  constructor(
    private store: Store<fromRoot.AppState>,
    private layoutStore: Store<fromLayout.LayoutState>,
    private settingsStore: Store<fromSettings.SettingsState>
  ) {}

  ngOnInit() {
    this.currentUser$ = this.store.select(fromRoot.getCurrentUser);
    this.settingsStore.dispatch(new fromSettings.LoadAppSettings());
    this.appSettings$ = this.settingsStore.select(fromSettings.getAppSettings);
  }

  onUserMenuClick(item: DropdownItem) {
    // if (item.id === "PROFILE") {
    //   this.store.dispatch(new fromRoot.Go({ path: ["/app/users/profile"] }));
    // }

    if (item.id === "LOGOUT") {
      this.store.dispatch(new fromRoot.Logout());
    }
  }

  openSettingsSidebar() {
    this.layoutStore.dispatch(new fromLayout.ShowSecondarySidebar());
  }
}
