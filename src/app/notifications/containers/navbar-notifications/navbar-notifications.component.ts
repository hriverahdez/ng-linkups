import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";

import { Notification } from "../../models/notification.model";
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

@Component({
  selector: "[lnk-navbar-notifications]",
  templateUrl: "./navbar-notifications.component.html",
  styleUrls: ["./navbar-notifications.component.scss"]
})
export class NavbarNotificationsComponent implements OnInit {
  notifications$: Observable<Notification[]>;
  toggled: boolean = false;

  unreadCount$: Observable<number>;

  constructor(
    private store: Store<fromStore.NotificationsState>,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {}

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

  ngOnInit() {
    this.unreadCount$ = this.store.select(
      fromStore.getUnreadNotificationsCount
    );
  }
}
