import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { InstitutionsRoutingModule } from "./institutions-routing.module";

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
    HttpClientModule,
    InstitutionsRoutingModule,
    StoreModule.forFeature("institutions", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers],
  providers: [...fromServices.services]
})
export class InstitutionsModule {}
