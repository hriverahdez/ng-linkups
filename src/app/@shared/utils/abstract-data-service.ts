import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError } from "rxjs/operators";
import "rxjs/add/observable/throw";

export abstract class AbstractDataService<T> {
  constructor(protected http: HttpClient, protected endpointName: string) {}

  /**
   * Makes an Http GET request to fetch all entities from the REST API backend
   */
  getAll(): Observable<T[]> {
    return this.http
      .get<T[]>(`${environment.apiURL}/${this.endpointName}`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  /**
   * Makes an Http GET request to obtain 1 item
   * @param id Item id
   */
  getOne(id: string): Observable<T> {
    return this.http
      .get<T>(`${environment.apiURL}/${this.endpointName}/${id}`)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  /**
   * Makes an Http POST request to persist an entity to the REST API backend
   * @param entity Entity data
   */
  add(entity: T): Observable<T> {
    return this.http
      .post<T>(`${environment.apiURL}/${this.endpointName}`, entity)
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  /**
   * Makes an Http PUT request to update an entity in the REST API backend
   * @param entity Entity data
   */
  update(entity: T): Observable<T> {
    return this.http
      .put<T>(
        `${environment.apiURL}/${this.endpointName}/${(entity as any)._id}`,
        entity
      )
      .pipe(catchError(error => Observable.throw(error.json())));
  }

  /**
   * Makes an Http DELETE request to delete an entity from the REST API backend
   * @param entity Entity to delete
   */
  delete(entity: T): Observable<Response> {
    return this.http
      .delete<any>(
        `${environment.apiURL}/${this.endpointName}/${(entity as any)._id}`
      )
      .pipe(catchError(error => Observable.throw(error.json())));
  }
}
