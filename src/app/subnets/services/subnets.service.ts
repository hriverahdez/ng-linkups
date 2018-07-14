import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Subnet } from "../../@shared/models";
import { AbstractDataService } from "../../@shared/asyncServices/http/abstract-data-service";

@Injectable()
export class SubnetsService extends AbstractDataService<Subnet> {
  constructor(http: HttpClient) {
    super(http, "subnets");
  }

  addSubnetRange(data: {
    range: string[];
    mask: number;
  }): Observable<Subnet[]> {
    return this.http
      .post<Subnet[]>(`${environment.apiURL}/${this.endpointName}/range`, data)
      .pipe(catchError(error => Observable.throw(error.json())));
  }
}
