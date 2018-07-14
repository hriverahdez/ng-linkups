// import { UserSessionNotExpiredGuard } from "./user-session-not-expired.guard";
import { RegistrationGuard } from "./registration.guard";

export const guards: any[] = [RegistrationGuard];

// export * from "./user-session-not-expired.guard";
export * from "./registration.guard";
