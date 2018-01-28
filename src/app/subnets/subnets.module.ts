import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppInterceptor } from "../@shared/utils/interceptor/token.interceptor";
import { SharedModule } from "../@shared/shared.module";
import { SubnetsRoutingModule } from "./subnets-routing.module";

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
    ReactiveFormsModule,
    SharedModule,
    SubnetsRoutingModule,
    StoreModule.forFeature("subnets", reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromServices.services, AppInterceptor],
  entryComponents: [fromContainers.SubnetsDialogComponent],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [fromContainers.SubnetsDialogComponent, ...fromComponents.components]
})
export class SubnetsModule {}
