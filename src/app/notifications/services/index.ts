import { NotificationsService } from "./notifications.service";
import { NotificationSocketHandlerService } from "./notification-socket-handler.service";

export const services: any[] = [
  NotificationsService,
  NotificationSocketHandlerService
];

export * from "./notifications.service";
export * from "./notification-socket-handler.service";
