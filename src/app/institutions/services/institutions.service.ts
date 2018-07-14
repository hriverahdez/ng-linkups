import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { AbstractDataService } from "../../@shared/utils/abstract-data-service";

import { Institution } from "../models/institution.model";

@Injectable()
export class InstitutionsService extends AbstractDataService<Institution> {
  constructor(http: HttpClient) {
    super(http, "institutions");
  }
}
