import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { SharedModule } from "../@shared/shared.module";
import { SubnetsRoutingModule } from "./subnets-routing.module";

import { reducers } from "./store";

// containers
import * as fromContainers from "./containers";

// services
import * as fromServices from "./services";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    SubnetsRoutingModule,
    StoreModule.forFeature("subnets", reducers)
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers]
})
export class SubnetsModule {}
