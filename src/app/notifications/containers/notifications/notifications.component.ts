import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs/Observable";
import { Notification } from "../../models/notification.model";

import * as fromServices from "../../services";

@Component({
  selector: "lnk-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"]
})
export class NotificationsComponent implements OnInit {
  notifications$: Observable<Notification[]>;

  messages$: Observable<any>;

  constructor(
    private store: Store<fromStore.NotificationsState>,
    private notificationSender: fromServices.NotificationSenderService
  ) {}

  ngOnInit() {
    this.notificationSender._notifications.subscribe(notif =>
      console.log(notif)
    );
    // this.notifications$ = this.store.select(fromStore.getAllNotifications);
    // this.store.dispatch(new fromStore.LoadNotifications());
  }

  send() {
    this.notificationSender.sendMsg({
      message: "FIRST ONE SENT",
      icon: "MY DICK!!",
      user: "hrivera",
      time: Date.now()
    });
  }
}
