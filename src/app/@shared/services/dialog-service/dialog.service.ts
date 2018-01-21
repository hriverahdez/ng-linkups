import { Observable } from "rxjs/Observable";
import { ConfirmDialogComponent } from "./dialogs/confirm-dialog/confirm-dialog.component";
import { Injectable } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material";

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirm(message: string) {
    let confirmDialogConfig = {
      width: "250px",
      disableClose: true,
      data: { message }
    };

    return this.openDialog(
      ConfirmDialogComponent,
      confirmDialogConfig
    ).afterClosed();
  }

  private openDialog(T, config) {
    let dialogRef = this.dialog.open(T, config);

    return dialogRef;
  }
}
