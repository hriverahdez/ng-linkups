import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InstitutionsRoutingModule } from "./institutions-routing.module";

// containers
import * as fromContainers from "./containers";

@NgModule({
  imports: [CommonModule, InstitutionsRoutingModule],
  declarations: [...fromContainers.containers]
})
export class InstitutionsModule {}
