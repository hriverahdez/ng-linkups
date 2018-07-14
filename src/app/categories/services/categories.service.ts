import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { Category } from "../models/category.model";
import { environment } from "../../../environments/environment";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";

@Injectable()
export class CategoriesService extends AbstractDataService<Category> {
  constructor(http: HttpClient) {
    super(http, "categories");
  }
}
