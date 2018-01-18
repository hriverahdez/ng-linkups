import { Component, OnInit, Input, ElementRef, Renderer2 } from "@angular/core";

import { DropdownItem } from "../../utils/dropdown";

@Component({
  selector: "[lnk-nav-dropdown]",
  templateUrl: "./nav-dropdown.component.html",
  styleUrls: ["./nav-dropdown.component.scss"]
})
export class NavDropdownComponent implements OnInit {
  @Input() hasBadge: boolean = false;
  @Input() badgeCount: number;
  @Input() icon: string;
  @Input() items: DropdownItem[];

  toggled: boolean = false;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit() {}

  toggle() {
    this.toggled
      ? this.renderer.removeClass(this.hostElement.nativeElement, "open")
      : this.renderer.addClass(this.hostElement.nativeElement, "open");
    this.toggled = !this.toggled;
  }
}
