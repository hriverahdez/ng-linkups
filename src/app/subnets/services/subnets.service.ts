import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { HttpClient } from "@angular/common/http";
import { Subnet } from "../models/subnet.model";

@Injectable()
export class SubnetsService extends AbstractDataService<Subnet> {
  constructor(http: HttpClient) {
    super(http, "subnets");
  }
}
