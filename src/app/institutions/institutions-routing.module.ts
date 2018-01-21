import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// containers
import * as fromContainers from "./containers";

// guards
import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.InstitutionsComponent,
    canActivate: [fromGuards.InstitutionsGuard]
  },
  {
    path: "add",
    component: fromContainers.InstitutionItemComponent
  },
  {
    path: ":institutionId",
    component: fromContainers.InstitutionItemComponent,
    canActivate: [fromGuards.InstitutionExistsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class InstitutionsRoutingModule {}
