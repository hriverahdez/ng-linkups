import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { DropdownItem } from "../../utils/dropdown";
import { AppSettings, User } from "../../models";

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

  @Input() appSettings: AppSettings;
  @Input() currentUser: User;

  @Output() showSettingsSidebar = new EventEmitter();
  @Output() loggedOut = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onUserMenuClick(item: DropdownItem) {
    if (item.id === "LOGOUT") {
      this.loggedOut.emit();
    }
  }

  openSettingsSidebar() {
    this.showSettingsSidebar.emit();
  }
}
