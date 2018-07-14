import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Institution } from "../../@shared/models";
import { AbstractDataService } from "../../@shared/asyncServices/http/abstract-data-service";

@Injectable()
export class InstitutionsService extends AbstractDataService<Institution> {
  constructor(http: HttpClient) {
    super(http, "institutions");
  }
}
