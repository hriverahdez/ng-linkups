import { NotificationSocketHandlerService } from "./notification-socket-handler.service";
import { NotificationsService } from "./notifications.service";
import { SettingsService } from "./settings.service";

export const services: any[] = [
  NotificationSocketHandlerService,
  NotificationsService,
  SettingsService
];

export * from "./notification-socket-handler.service";
export * from "./notifications.service";
export * from "./settings.service";
