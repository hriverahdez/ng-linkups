import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "../@shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from "@ngrx/router-store";

import { EffectsModule } from "@ngrx/effects";

import { storeFreeze } from "ngrx-store-freeze";

import { environment } from "../../environments/environment";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

import { reducers, CustomSerializer } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components/";

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {}
