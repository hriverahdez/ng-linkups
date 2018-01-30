import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

// container
import * as fromContainers from "./containers";

// guards
import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.SubnetsComponent,
    canActivate: [fromGuards.SubnetsGuard]
  },
  {
    path: "add",
    component: fromContainers.SubnetItemComponent
  },
  {
    path: ":subnetId",
    component: fromContainers.SubnetItemComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SubnetsRoutingModule {}
