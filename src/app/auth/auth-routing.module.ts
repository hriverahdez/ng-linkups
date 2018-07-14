import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// guards
// import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "register"
    // component: fromContainers.RegisterComponent,
    // canActivate: [fromGuards.RegistrationGuard]
  },
  {
    path: "login",
    component: fromContainers.LoginComponent
  }
  //   {
  //     path: "app",
  //     loadChildren: "../@layout/layout.module#LayoutModule",
  //     canActivate: [fromGuards.UserSessionNotExpiredGuard]
  //   }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
