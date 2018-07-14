import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

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

// guards
import * as fromGuards from "./guards";

@NgModule({
  imports: [...NG_MAT_MODULES, CommonModule],
  entryComponents: [fromComponents.ConfirmDialogComponent],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [
    ...NG_MAT_MODULES,
    ...fromContainers.containers,
    ...fromComponents.components
  ]
})
export class SharedModule {}
