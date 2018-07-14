import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2
} from "@angular/core";

import { DropdownItem } from "../../utils/dropdown";

@Component({
  selector: "[lnk-nav-dropdown]",
  templateUrl: "./nav-dropdown.component.html",
  styleUrls: ["./nav-dropdown.component.scss"]
})
export class NavDropdownComponent {
  @Input() title: string;
  @Input() hasBadge: boolean = false;
  @Input() badgeCount: number;
  @Input() icon: string;
  @Input() items: DropdownItem[];

  @Output() onItemClicked = new EventEmitter<DropdownItem>();
  toggled: boolean = false;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  itemClicked(item: DropdownItem) {
    this.onItemClicked.emit(item);
  }

  show() {
    this.renderer.addClass(this.hostElement.nativeElement, "open");
    this.toggled = true;
  }

  hide() {
    this.renderer.removeClass(this.hostElement.nativeElement, "open");
    this.toggled = false;
  }

  toggle() {
    this.toggled ? this.hide() : this.show();
  }
}
