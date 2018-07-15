import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { DropdownItem } from "../../utils/dropdown";
import { AppSettings, User, Notification } from "../../models";
import { NavbarSandbox } from "./navbar.sandbox";
import { Observable } from "rxjs";

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

  appSettings$: Observable<AppSettings> = this.sb.appSettings$;
  currentUser$: Observable<User> = this.sb.currentUser$;

  unreadNotifications$: Observable<Notification[]> = this.sb
    .unreadNotifications$;

  notificationsLoading$: Observable<boolean> = this.sb.notificationsLoading$;

  unreadNotificationsCount$: Observable<number> = this.sb
    .unreadNotificationsCount$;

  constructor(private sb: NavbarSandbox) {}

  ngOnInit() {}

  onUserMenuClick(item: DropdownItem) {
    if (item.id === "LOGOUT") {
      this.sb.logOut();
    }
  }

  openSettingsSidebar() {
    this.sb.toggleSidebar();
  }
}
