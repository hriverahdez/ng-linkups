import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../@shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class UsersModule {}
