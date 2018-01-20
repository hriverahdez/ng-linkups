import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";

import { Institution } from "../models/institution.model";

@Injectable()
export class InstitutionsService {
  constructor(private http: HttpClient) {}

  getInstitutions(): Observable<Institution[]> {
    return this.http
      .get<Institution[]>(`${environment.apiURL}/institutions`)
      .pipe(catchError(err => Observable.throw(err.json())));
  }

  addInstitution(inst: Institution): Observable<Institution> {
    return this.http
      .post<Institution>(`${environment.apiURL}/institutions`, inst)
      .pipe(catchError(error => Observable.throw(error.json())));
  }
}
