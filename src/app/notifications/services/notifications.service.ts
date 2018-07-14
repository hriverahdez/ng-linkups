import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { HttpClient } from "@angular/common/http";
import { Notification } from "../models/notification.model";
import { environment } from "../../../environments/environment";

import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class NotificationsService {
  constructor(private http: HttpClient) {}

  getUnreadNotificationsCountFromServer(): Observable<{ count: number }> {
    return this.http
      .get<{ count: number }>(
        `${environment.apiURL}/users/unreadNotificationsCount`
      )
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  getInitialUnreadNotificationsCount() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return of(currentUser.unreadNotifications);
  }

  getNotifications(): Observable<Notification[]> {
    return this.http
      .get<Notification[]>(`${environment.apiURL}/users/notifications`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  getUnreadNotifications(): Observable<Notification[]> {
    return this.http
      .get<Notification[]>(`${environment.apiURL}/users/unreadNotifications`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  sendNotification(notification: Notification): Observable<Notification> {
    return this.http
      .post<Notification>(`${environment.apiURL}/notifications`, notification)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  readAllNotifications(): Observable<Response> {
    return this.http
      .post<any>(`${environment.apiURL}/users/readAllNotifications`, {})
      .pipe(catchError(error => Observable.throw(error.json())));
  }
}
