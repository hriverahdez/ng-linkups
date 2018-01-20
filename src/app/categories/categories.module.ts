import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { SharedModule } from "../@shared/shared.module";

import { reducers, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    CategoriesRoutingModule,
    StoreModule.forFeature("categories", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services]
})
export class CategoriesModule {}