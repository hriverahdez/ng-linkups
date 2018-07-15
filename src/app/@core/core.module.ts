import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment";

// @NGRX/STORE
import { StoreModule, MetaReducer } from "@ngrx/store";

import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from "@ngrx/router-store";

import { EffectsModule } from "@ngrx/effects";

// @NGRX/STORE Dev dependencies
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";

// Store setup
import { reducers, CustomSerializer, effects } from "./root-store";

@NgModule({
  imports: [
    // Root Store
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import only in AppModule");
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,

      providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer }
      ]
    };
  }
}
