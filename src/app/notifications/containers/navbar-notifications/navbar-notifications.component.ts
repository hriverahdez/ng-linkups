import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";

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
  //   toggled: boolean = false;

  //   isLoading$: Observable<boolean>;
  //   notificationsLoaded: boolean;
  //   notifications$: Observable<Notification[]>;
  //   unreadCount$: Observable<number>;

  //   constructor(
  //     private store: Store<fromStore.NotificationsState>,
  //     private renderer: Renderer2,
  //     private hostElement: ElementRef
  //   ) {}

  //   show() {
  //     this.renderer.addClass(this.hostElement.nativeElement, "open");
  //     this.toggled = true;
  //     this.store.dispatch(new fromStore.OpenNotificationsNavbar());
  //   }

  //   hide() {
  //     this.renderer.removeClass(this.hostElement.nativeElement, "open");
  //     this.toggled = false;
  //     this.store.dispatch(new fromStore.CloseNotificationsNavbar());
  //   }

  //   toggle() {
  //     this.toggled ? this.hide() : this.show();
  //   }

  ngOnInit() {
    // this.isLoading$ = this.store.select(fromStore.getNotificationsLoading);
    // this.notifications$ = this.store
    //   .select(fromStore.getUnreadNotifications)
    //   .pipe(map(n => n.slice(0, 10)));
    // this.unreadCount$ = this.store.select(
    //   fromStore.getUnreadNotificationsCount
    // );
  }
}
