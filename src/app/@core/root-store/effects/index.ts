import { NotificationsEffect } from "./notifications.effect";
import { RouterEffects } from "./router.effects";
import { SettingsEffects } from "./settings.effect";
import { UIEffects } from "./ui.effects";

export const effects: any[] = [
  NotificationsEffect,
  RouterEffects,
  SettingsEffects,
  UIEffects
];

export * from "./notifications.effect";
export * from "./router.effects";
export * from "./settings.effect";
export * from "./ui.effects";
