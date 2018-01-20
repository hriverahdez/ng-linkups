import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../@shared/shared.module";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

import * as fromSharedGuards from "../@shared/guards";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.DashboardComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: []
})
export class DashboardModule {}
