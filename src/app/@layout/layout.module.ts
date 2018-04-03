import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { SharedModule } from "../@shared/shared.module";
import { NotificationsModule } from "../notifications/notifications.module";
import { SettingsModule } from "../settings/settings.module";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components/";

@NgModule({
  imports: [
    LayoutRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature("layout", reducers),
    EffectsModule.forFeature(effects),
    SettingsModule,
    NotificationsModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class LayoutModule {}
