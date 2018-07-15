import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./@shared/components/page-not-found/page-not-found.component";

// guards
// import * as fromGuards from "./guards";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "categories",
    loadChildren: "./categories/categories.module#CategoriesModule"
  },
  {
    path: "institutions",
    loadChildren: "./institutions/institutions.module#InstitutionsModule"
  },
  {
    path: "subnets",
    loadChildren: "./subnets/subnets.module#SubnetsModule"
  },
  //   {
  //     path: "notifications",
  //     loadChildren: "./notifications/notifications.module#NotificationsModule"
  //   },
  //   {
  //     path: "users",
  //     loadChildren: "./users/users.module#UsersModule"
  //   },

  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
