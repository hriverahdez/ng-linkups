import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { UtilityModule } from "./@shared/utility";

// guards
import * as sharedGuards from "./@shared/guards";

// Root Component
import { AppComponent } from "./app.component";
import { CoreModule } from "./@core/core.module";

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

    AuthModule
  ],
  providers: [...sharedGuards.guards],
  bootstrap: [AppComponent]
})
export class AppModule {}
