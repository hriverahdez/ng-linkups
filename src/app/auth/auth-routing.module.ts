import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// containers
import * as fromContainers from "./containers";

// guards
import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "register",
    component: fromContainers.RegisterComponent,
    canActivate: [fromGuards.RegistrationGuard]
  },
  {
    path: "login",
    component: fromContainers.LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
