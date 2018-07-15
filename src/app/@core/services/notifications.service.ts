import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Notification } from "../../@shared/models/notification.model";
import { environment } from "../../../environments/environment";

import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class NotificationsService {
  constructor(private http: HttpClient) {}

  getUnreadNotificationsCountFromServer(): Observable<{ count: number }> {
    return this.http
      .get<{ count: number }>(
        `${environment.apiURL}/users/unreadNotificationsCount`
      )
      .pipe(catchError(error => throwError(error.json())));
  }

  getInitialUnreadNotificationsCount() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return of(currentUser.unreadNotifications);
  }

  getNotifications(): Observable<Notification[]> {
    return this.http
      .get<Notification[]>(`${environment.apiURL}/users/notifications`)
      .pipe(catchError(error => throwError(error.json())));
  }

  getUnreadNotifications(): Observable<Notification[]> {
    return this.http
      .get<Notification[]>(`${environment.apiURL}/users/unreadNotifications`)
      .pipe(catchError(error => throwError(error.json())));
  }

  sendNotification(notification: Notification): Observable<Notification> {
    return this.http
      .post<Notification>(`${environment.apiURL}/notifications`, notification)
      .pipe(catchError(error => throwError(error.json())));
  }

  readAllNotifications(): Observable<Response> {
    return this.http
      .post<any>(`${environment.apiURL}/users/readAllNotifications`, {})
      .pipe(catchError(error => throwError(error.json())));
  }
}
