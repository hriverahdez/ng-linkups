import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";
import * as fromSharedGuards from "../@shared/guards";

const routes: Routes = [
  {
    path: "",
    component: fromContainers.LayoutComponent,
    canActivate: [fromSharedGuards.AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: "../dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "institutions",
        loadChildren: "../institutions/institutions.module#InstitutionsModule"
      },
      {
        path: "categories",
        loadChildren: "../categories/categories.module#CategoriesModule"
      },
      {
        path: "subnets",
        loadChildren: "../subnets/subnets.module#SubnetsModule"
      },
      { path: "", redirectTo: "/app/dashboard", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
