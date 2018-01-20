import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoriesRoutingModule } from "./categories-routing.module";

// containers
import * as fromContainers from "./containers";

@NgModule({
  imports: [CommonModule, CategoriesRoutingModule],
  declarations: [...fromContainers.containers]
})
export class CategoriesModule {}
