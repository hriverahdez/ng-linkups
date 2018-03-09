import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsRoutingModule } from "./settings-routing.module";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers } from "./store";

// containers
import * as fromContainers from "./containers";

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    StoreModule.forFeature("settings", reducers),
    EffectsModule.forFeature([])
  ],
  declarations: [...fromContainers.containers]
})
export class SettingsModule {}
