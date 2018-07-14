import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material";
import { ConfirmDialogComponent } from "../components";

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  defaultDialogConfig = {
    width: "50%"
  };

  confirm(message: string) {
    let confirmDialogConfig: MatDialogConfig = {
      width: "250px",
      disableClose: true,
      data: { message }
    };

    return this.openDialog(
      ConfirmDialogComponent,
      confirmDialogConfig
    ).afterClosed();
  }

  customDialogComponent<T>(
    T,
    config: MatDialogConfig = this.defaultDialogConfig
  ) {
    return this.openDialog(T, config).afterClosed();
  }

  private openDialog(T, config: MatDialogConfig) {
    let dialogRef = this.dialog.open(T, config);

    return dialogRef;
  }
}
