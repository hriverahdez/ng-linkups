import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";

import { Category } from "../models/category.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${environment.apiURL}/categories`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }
}
