import { Component, OnInit } from "@angular/core";

import { MenuItem, APP_MENU } from "../../utils/app-menu";

@Component({
  selector: "lnk-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[] = APP_MENU;

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

  constructor() {}

  ngOnInit() {}

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
