import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "lnk-nav-toggler",
  templateUrl: "./nav-toggler.component.html",
  styleUrls: ["./nav-toggler.component.scss"]
})
export class NavTogglerComponent implements OnInit {
  private sidebarVisible: boolean = false;
  private toggleButton: any;

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
