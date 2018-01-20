import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

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
  MatSlideToggleModule,
  MatInputModule
} from "@angular/material";

const NG_MAT_MODULES = [
  MatCardModule,
  MatInputModule,
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

import { LoaderComponent } from "./components/loader/loader.component";

// services
import * as fromServices from "./services";

// guards
import * as fromGuards from "./guards";

@NgModule({
  imports: [...NG_MAT_MODULES, CommonModule],
  declarations: [LoaderComponent],
  providers: [...fromServices.services, ...fromGuards.guards],
  exports: [...NG_MAT_MODULES, LoaderComponent]
})
export class SharedModule {}
