import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { storeFreeze } from "ngrx-store-freeze";

import { environment } from "../../environments/environment";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

import { SharedModule } from "../@shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components/";

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    SharedModule
  ],
  providers: [],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule {}
