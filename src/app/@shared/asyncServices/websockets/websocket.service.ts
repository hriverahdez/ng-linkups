import { Injectable } from "@angular/core";

import * as io from "socket.io-client";
import { Observable, Subject } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({ providedIn: "root" })
export class WebsocketService<T> {
  private socket;

  constructor() {}

  connect(socketId = "notification"): Subject<{ type: string; data: T }> {
    this.socket = io(environment.wsUrl);

    let observable = new Observable(observer => {
      this.socket.on(socketId, data => {
        console.log(`Received ${socketId} from Websocket Server`);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    let observer = {
      next: (data: T) => {
        this.socket.emit(socketId, JSON.stringify(data));
      }
    };

    return Subject.create(observer, observable);
  }
}
