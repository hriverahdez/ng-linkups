import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { SharedModule } from "../@shared/shared.module";

import { StoreModule } from "@ngrx/store";

import { reducers } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components/";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    StoreModule.forFeature("layout", reducers)
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class LayoutModule {}
