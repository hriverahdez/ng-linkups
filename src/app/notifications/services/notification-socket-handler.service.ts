import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Notification } from "../../@shared/models/notification.model";
import { WebsocketService } from "../../@shared/asyncServices/websockets/websocket.service";

@Injectable()
export class NotificationSocketHandlerService {
  _notifications: Subject<Notification>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService<Notification>) {
    this._notifications = <Subject<Notification>>wsService.connect().pipe(
      map(
        (response: any): Notification => {
          return response.data;
        }
      )
    );
  }

  get notifications$() {
    return this._notifications.asObservable();
  }

  sendNotification(notification: Notification) {
    this._notifications.next(notification);
  }
}
