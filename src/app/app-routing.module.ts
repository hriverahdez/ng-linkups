import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

// guards
// import * as fromGuards from "./guards";

const routes: Routes = [
  //   {
  //     path: "app",
  //     loadChildren: "../@layout/layout.module#LayoutModule",
  //     canActivate: [fromGuards.UserSessionNotExpiredGuard]
  //   },
  //   { path: "", redirectTo: "/app/dashboard", pathMatch: "full" },
  //   { path: "**", redirectTo: "app" }
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
  //   { path: "**", redirectTo: "register" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
