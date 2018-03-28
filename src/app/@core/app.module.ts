import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "../@shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from "@ngrx/router-store";

import { EffectsModule } from "@ngrx/effects";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";

import { environment } from "../../environments/environment";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

import { reducers, CustomSerializer, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// guards
import * as fromGuards from "./guards";
import { SettingsModule } from "../settings/settings.module";

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SettingsModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    ...fromGuards.guards
  ],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {}
