import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

// container
import * as fromContainers from "./containers";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.SubnetsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SubnetsRoutingModule {}
