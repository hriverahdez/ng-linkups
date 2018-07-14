import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { Category } from "../../@shared/models";
import { AbstractDataService } from "../../@shared/asyncServices/http/abstract-data-service";

@Injectable()
export class CategoriesService extends AbstractDataService<Category> {
  constructor(http: HttpClient) {
    super(http, "categories");
  }
}
