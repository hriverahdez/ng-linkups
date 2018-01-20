import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// containers
import * as fromContainers from "./containers";

const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
