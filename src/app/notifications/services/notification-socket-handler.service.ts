import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import * as fromSharedServices from "../../@shared/services";
import { Notification } from "../models/notification.model";

@Injectable()
export class NotificationSocketHandlerService {
  _notifications: Subject<Notification>;

  // Our constructor calls our wsService connect method
  constructor(
    private wsService: fromSharedServices.WebsocketService<Notification>
  ) {
    this._notifications = <Subject<Notification>>wsService.connect().pipe(
      map((response): Notification => {
        return response.data;
      })
    );
  }

  get notifications$() {
    return this._notifications.asObservable();
  }

  sendNotification(notification: Notification) {
    this._notifications.next(notification);
  }
}
