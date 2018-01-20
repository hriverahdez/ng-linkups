import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";

const routes: Routes = [
  {
    path: "",
    component: fromContainers.LayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: "../dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "institutions",
        loadChildren: "../institutions/institutions.module#InstitutionsModule"
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
