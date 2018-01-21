import { AuthenticationService } from "./authentication.service";
import { SnackBarService } from "./snack-bar.service";
import { DialogService } from "./dialog-service/dialog.service";

export const services: any[] = [
  AuthenticationService,
  SnackBarService,
  DialogService
];

export * from "./authentication.service";
export * from "./snack-bar.service";
export * from "./dialog-service/dialog.service";
