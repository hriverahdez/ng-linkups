import { AuthenticationService } from "./authentication.service";
import { SnackBarService } from "./snack-bar.service";

export const services: any[] = [AuthenticationService, SnackBarService];

export * from "./authentication.service";
export * from "./snack-bar.service";
