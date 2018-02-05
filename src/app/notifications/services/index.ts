import { NotificationsService } from "./notifications.service";
import { NotificationHelperService } from "./notification-helper.service";

export const services: any[] = [
  NotificationsService,
  NotificationHelperService
];

export * from "./notifications.service";
export * from "./notification-helper.service";
