import { RouterEffects } from "./router.effects";
import { SettingsEffects } from "./settings.effect";
import { UIEffects } from "./ui.effects";

export const effects: any[] = [RouterEffects, SettingsEffects, UIEffects];

export * from "./router.effects";
export * from "./settings.effect";
export * from "./ui.effects";
