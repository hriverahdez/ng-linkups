import { Injectable } from "@angular/core";

import * as io from "socket.io-client";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { environment } from "../../../environments/environment";

@Injectable()
export class WebsocketService<T> {
  private socket;

  constructor() {}

  connect(): Subject<{ type: string; data: T }> {
    this.socket = io(environment.wsUrl);

    let observable = new Observable(observer => {
      this.socket.on("notification", data => {
        console.log("Received message from Websocket Server");
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    let observer = {
      next: (data: T) => {
        this.socket.emit("notification", JSON.stringify(data));
      }
    };

    return Subject.create(observer, observable);
  }
}
