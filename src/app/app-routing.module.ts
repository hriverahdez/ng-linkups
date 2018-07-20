import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./@shared/components/page-not-found/page-not-found.component";
import { AuthGuard } from "./@shared/guards";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    canActivate: [AuthGuard]
  },
  {
    path: "categories",
    loadChildren: "./categories/categories.module#CategoriesModule",
    canActivate: [AuthGuard]
  },
  {
    path: "institutions",
    loadChildren: "./institutions/institutions.module#InstitutionsModule",
    canActivate: [AuthGuard]
  },
  {
    path: "subnets",
    loadChildren: "./subnets/subnets.module#SubnetsModule",
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
