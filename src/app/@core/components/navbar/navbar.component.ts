import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "lnk-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  private sidebarVisible: boolean;
  private toggleButton: any;

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

  constructor(private element: ElementRef) {}

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName("body")[0];
    setTimeout(function() {
      toggleButton.classList.add("toggled");
    }, 200);
    body.classList.add("nav-open");

    this.sidebarVisible = true;
  }

  sidebarClose() {
    const body = document.getElementsByTagName("body")[0];
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    body.classList.remove("nav-open");
  }

  sidebarToggle() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName("body")[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
}
