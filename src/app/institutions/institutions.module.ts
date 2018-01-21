import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { InstitutionsRoutingModule } from "./institutions-routing.module";
import { SharedModule } from "../@shared/shared.module";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers, effects } from "./store";

import { AppInterceptor } from "../@shared/utils/interceptor/token.interceptor";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";

// guards
import * as fromGuards from "./guards";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    InstitutionsRoutingModule,
    StoreModule.forFeature("institutions", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.conmponents],
  providers: [...fromServices.services, ...fromGuards.guards, AppInterceptor]
})
export class InstitutionsModule {}
