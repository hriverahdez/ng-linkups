import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.DashboardComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: []
})
export class DashboardModule {}
