import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";

import { reducers } from "./store";

// services
import * as fromServices from "./services";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature("notifications", reducers)
  ],
  providers: [...fromServices.services],
  declarations: []
})
export class NotificationsModule {}
