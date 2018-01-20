import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// containers
import * as fromContainers from "./containers";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.InstitutionsComponent
  },
  {
    path: "add",
    component: fromContainers.InstitutionItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class InstitutionsRoutingModule {}
