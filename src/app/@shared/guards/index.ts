import { AuthGuard } from "./auth.guard";
import { CanDeactivateGuard } from "./canDeactivate.guard";

export const guards: any[] = [AuthGuard, CanDeactivateGuard];

export * from "./auth.guard";
export * from "./canDeactivate.guard";
