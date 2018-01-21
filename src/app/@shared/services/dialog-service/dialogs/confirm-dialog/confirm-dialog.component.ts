import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Component, Inject } from "@angular/core";

@Component({
  selector: "kc-confirm-dialog",
  template: `
    <div class="text-center">
      <h4>{{ data.message }}</h4>

      <button mat-button (click)="onAccept()" color="primary">Sí</button>
      <button mat-button (click)="onCancel()" color="warn">No</button>
    </div>
  `
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onAccept() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
