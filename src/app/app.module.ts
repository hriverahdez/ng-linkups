import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, APP_INITIALIZER } from "@angular/core";
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

import { ConfigService } from "./app-config.service";
import { AppInterceptor } from "./auth/interceptors/token.interceptor";

export function configServiceFactory(config: ConfigService) {
  return () => config.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // App Dependencies
    CoreModule.forRoot(),
    // UtilityModule.forRoot(),

    AuthModule,
    // TODO: maybe remove eager loading and use lazy loading
    AppRoutingModule
  ],
  providers: [
    ...sharedGuards.guards,
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    },
    AppInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
