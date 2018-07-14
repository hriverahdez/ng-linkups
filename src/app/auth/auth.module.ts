// Angular dependencies
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Module dependencies
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../@shared/shared.module";

// Feature store
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,

    StoreModule.forFeature("authState", reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class AuthModule {}
