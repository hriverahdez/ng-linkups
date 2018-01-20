import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";

const routes: Routes = [
  {
    path: "login",
    component: fromContainers.LoginComponent
  },
  {
    path: "app",
    loadChildren: "../@layout/layout.module#LayoutModule"
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
