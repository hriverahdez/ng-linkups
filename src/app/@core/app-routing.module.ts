import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

// containers
import * as fromContainers from "./containers";

// guards
import * as fromGuards from "./guards";

const routes: Routes = [
  {
    path: "register",
    component: fromContainers.RegisterComponent,
    canActivate: [fromGuards.RegistrationGuard]
  },
  {
    path: "login",
    component: fromContainers.LoginComponent
  },
  {
    path: "app",
    loadChildren: "../@layout/layout.module#LayoutModule",
    canActivate: [fromGuards.UserSessionNotExpiredGuard]
  },
  { path: "", redirectTo: "/app/dashboard", pathMatch: "full" },
  { path: "**", redirectTo: "app" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
