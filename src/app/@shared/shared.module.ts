import { NgModule } from "@angular/core";

import {
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatProgressBarModule,
  MatDialogModule,
  MatIconModule,
  MatCheckboxModule,
  MatTableModule,
  MatSnackBarModule,
  MatSlideToggleModule
} from "@angular/material";

const NG_MAT_MODULES = [
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatTableModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatProgressBarModule,
  MatDialogModule,
  MatIconModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatSnackBarModule
];

@NgModule({
  imports: [...NG_MAT_MODULES],
  exports: [...NG_MAT_MODULES]
})
export class SharedModule {}
