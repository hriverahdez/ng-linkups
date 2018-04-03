import { RouterEffects } from "./router.effects";
import { CurrentUserEffects } from "./current-user.effects";

export const effects: any[] = [RouterEffects, CurrentUserEffects];

export * from "./router.effects";
export * from "./current-user.effects";
