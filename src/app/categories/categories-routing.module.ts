import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// containers
import * as fromContainers from "./containers";

// guards
import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.CategoriesComponent,
    canActivate: [fromGuards.CategoriesGuard]
  },
  {
    path: "add",
    component: fromContainers.CategoryItemComponent
  },
  {
    path: ":categoryId",
    component: fromContainers.CategoryItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
