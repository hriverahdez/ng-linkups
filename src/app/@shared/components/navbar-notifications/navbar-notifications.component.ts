import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  Input,
  EventEmitter,
  Output
} from "@angular/core";

import { Notification } from "../../../@shared/models/notification.model";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { Store } from "@ngrx/store";
// import * as fromStore from "../../store";

@Component({
  selector: "[lnk-navbar-notifications]",
  templateUrl: "./navbar-notifications.component.html",
  styleUrls: ["./navbar-notifications.component.scss"]
})
export class NavbarNotificationsComponent implements OnInit {
  toggled: boolean = false;

  //   notificationsLoaded: boolean;
  @Input() isLoading: boolean;
  @Input() notifications: Notification[];
  @Input() unreadCount: number;

  @Output() showing = new EventEmitter();
  @Output() hidden = new EventEmitter();

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  show() {
    this.renderer.addClass(this.hostElement.nativeElement, "open");
    this.toggled = true;
    this.showing.emit();
    //   this.store.dispatch(new fromStore.OpenNotificationsNavbar());
  }

  hide() {
    this.renderer.removeClass(this.hostElement.nativeElement, "open");
    this.toggled = false;
    this.hidden.emit();
    //   this.store.dispatch(new fromStore.CloseNotificationsNavbar());
  }

  toggle() {
    this.toggled ? this.hide() : this.show();
  }

  ngOnInit() {}
}
