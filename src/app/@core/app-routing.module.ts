import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";

const routes: Routes = [
  {
    path: "app",
    loadChildren: "../@layout/layout.module#LayoutModule"
  },
  {
    path: "login",
    component: fromContainers.LoginComponent
  },
  { path: "", redirectTo: "/app/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "app" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
