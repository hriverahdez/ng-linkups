import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { SharedModule } from "../@shared/shared.module";

// containers
import * as fromContainers from "./containers";

@NgModule({
  imports: [CommonModule, SharedModule, CategoriesRoutingModule],
  declarations: [...fromContainers.containers]
})
export class CategoriesModule {}
