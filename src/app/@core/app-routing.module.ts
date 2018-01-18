import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: "../dashboard/dashboard.module#DashboardModule"
  },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
