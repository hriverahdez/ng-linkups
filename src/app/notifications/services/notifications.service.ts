import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { HttpClient } from "@angular/common/http";
import { Notification } from "../models/notification.model";

@Injectable()
export class NotificationsService extends AbstractDataService<Notification> {
  constructor(http: HttpClient) {
    super(http, "notifications");
  }
}
