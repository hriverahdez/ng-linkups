import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsRoutingModule } from "./settings-routing.module";
import { AppInterceptor } from "../@shared/utils/interceptor/token.interceptor";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// services
import * as fromServices from "./services";

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    StoreModule.forFeature("settings", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers],
  providers: [...fromServices.services, AppInterceptor]
})
export class SettingsModule {}
