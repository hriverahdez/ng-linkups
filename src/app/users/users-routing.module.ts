import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from "./containers";

const ROUTES: Routes = [
  {
    path: "profile",
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
