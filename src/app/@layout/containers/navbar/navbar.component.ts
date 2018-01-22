import { Component, OnInit } from "@angular/core";

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
      text: "My Profile"
    },
    {
      text: "Log out"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
