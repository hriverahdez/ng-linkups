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
  MatDialogModule,
  MatIconModule,
  MatCheckboxModule,
  MatTableModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatInputModule
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
  MatDialogModule,
  MatIconModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatSnackBarModule
];

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";

// guards
import * as fromGuards from "./guards";

@NgModule({
  imports: [...NG_MAT_MODULES, CommonModule],
  entryComponents: [fromComponents.ConfirmDialogComponent],
  declarations: [...fromComponents.components],
  providers: [...fromServices.services, ...fromGuards.guards],
  exports: [...NG_MAT_MODULES, ...fromComponents.components]
})
export class SharedModule {}
