import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";

import { Notification } from "../../models/notification.model";
import { Observable } from "rxjs/Observable";
import { map, tap } from "rxjs/operators";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

@Component({
  selector: "[lnk-navbar-notifications]",
  templateUrl: "./navbar-notifications.component.html",
  styleUrls: ["./navbar-notifications.component.scss"]
})
export class NavbarNotificationsComponent implements OnInit {
  toggled: boolean = false;

  isLoading: boolean = true;
  notificationsLoaded: boolean;
  notifications$: Observable<Notification[]>;
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
    if (!this.notificationsLoaded) {
      this.store.dispatch(new fromStore.LoadNotifications());
    }
  }

  ngOnInit() {
    this.store.select(fromStore.getNotificationsLoaded).subscribe(loaded => {
      this.notificationsLoaded = loaded;
    });

    this.notifications$ = this.store
      .select(fromStore.getUnreadNotifications)
      .pipe(map(n => n.slice(0, 10)));

    this.unreadCount$ = this.store.select(
      fromStore.getUnreadNotificationsCount
    );
  }
}
