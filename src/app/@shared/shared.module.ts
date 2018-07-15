import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {
  MatCardModule,
  MatSelectModule,
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
  MatProgressSpinnerModule,
  MatDialogModule,
  MatIconModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTableModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatInputModule,
  MatPaginatorModule,
  MatSidenavModule
} from "@angular/material";

const NG_MAT_MODULES = [
  MatCardModule,
  MatInputModule,
  MatSelectModule,
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
  MatProgressSpinnerModule,
  MatDialogModule,
  MatIconModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSidenavModule
];

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";
import { UtilityModule } from "./utility";

@NgModule({
  imports: [
    ...NG_MAT_MODULES,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    UtilityModule.forRoot()
  ],
  entryComponents: [fromComponents.ConfirmDialogComponent],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [
    ...NG_MAT_MODULES,
    ...fromContainers.containers,
    ...fromComponents.components,
    UtilityModule
  ]
})
export class SharedModule {}
