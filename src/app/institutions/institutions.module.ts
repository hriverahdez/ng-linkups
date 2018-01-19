import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { InstitutionsRoutingModule } from "./institutions-routing.module";

// containers
import * as fromContainers from "./containers";

// services
import * as fromServices from "./services";

@NgModule({
  imports: [CommonModule, InstitutionsRoutingModule],
  declarations: [...fromContainers.containers],
  providers: [HttpClientModule, ...fromServices.services]
})
export class InstitutionsModule {}
