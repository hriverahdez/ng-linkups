import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./@core/core.module";
import { UtilityModule } from "./@shared/utility";
import { AuthModule } from "./auth/auth.module";
import { DashboardModule } from "./dashboard/dashboard.module";

// guards
import * as sharedGuards from "./@shared/guards";

// Root Component
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // App Dependencies
    AppRoutingModule,
    CoreModule.forRoot(),
    UtilityModule.forRoot(),

    AuthModule,
    DashboardModule
  ],
  providers: [...sharedGuards.guards],
  bootstrap: [AppComponent]
})
export class AppModule {}
