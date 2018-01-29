import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// containers
import * as fromContainers from "./containers";

// guards
import * as fromGuards from "./guards";
import * as categoriesGuards from "../categories/guards";
import * as subnetsGuards from "../subnets/guards";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.InstitutionsComponent,
    canActivate: [fromGuards.InstitutionsGuard]
  },
  {
    path: "add",
    component: fromContainers.InstitutionItemComponent,
    canActivate: [categoriesGuards.CategoriesGuard, subnetsGuards.SubnetsGuard]
  },
  {
    path: ":institutionId",
    component: fromContainers.InstitutionItemComponent,
    canActivate: [
      fromGuards.InstitutionExistsGuard,
      categoriesGuards.CategoriesGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class InstitutionsRoutingModule {}
