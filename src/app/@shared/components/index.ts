import { AddNewButtonComponent } from "./add-new-button/add-new-button.component";
import { LoaderComponent } from "./loader/loader.component";

// dialog cmponent for dialog service
import { ConfirmDialogComponent } from "../services/dialog-service/dialogs/confirm-dialog/confirm-dialog.component";

export const components: any[] = [
  LoaderComponent,
  AddNewButtonComponent,
  ConfirmDialogComponent
];

export * from "./loader/loader.component";
export * from "./add-new-button/add-new-button.component";
export * from "../services/dialog-service/dialogs/confirm-dialog/confirm-dialog.component";
