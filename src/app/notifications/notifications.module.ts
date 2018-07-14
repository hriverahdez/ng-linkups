// import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
// import { HttpClientModule } from "@angular/common/http";

// import { AppInterceptor } from "../@shared/utils/interceptor/token.interceptor";

// import { NotificationsRoutingModule } from "./notifications-routing.module";
// import { SharedModule } from "../@shared/shared.module";

// import { StoreModule } from "@ngrx/store";
// import { EffectsModule } from "@ngrx/effects";

// import { reducers, effects } from "./store";

// // containers
// import * as fromContainers from "./containers";

// // services
// import * as fromServices from "./services";

// // guards
// import * as fromGuards from "./guards";

// @NgModule({
//   imports: [
//     CommonModule,
//     SharedModule,
//     HttpClientModule,
//     NotificationsRoutingModule,
//     StoreModule.forFeature("notifications", reducers),
//     EffectsModule.forFeature(effects)
//   ],
//   providers: [...fromServices.services, ...fromGuards.guards, AppInterceptor],
//   declarations: [...fromContainers.containers],
//   exports: [...fromContainers.containers]
// })
// export class NotificationsModule {}
