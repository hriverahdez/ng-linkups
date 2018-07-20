import { Injectable, Injector } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private auth: AuthenticationService;

  /** Add '*' to array exclude all requests */
  private unauthenticatedEndpoints = [
    "/auth",
    "/password",
    "/register",
    "/config"
  ];

  constructor(private injector: Injector) {
    this.auth = this.injector.get(AuthenticationService);
  }

  setHeaders(request: HttpRequest<any>) {
    return function(token: string) {
      return request.clone({
        setHeaders: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      });
    };
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.requestIsExcluded(request)) {
      return next.handle(request);
    }

    return this.auth.getToken().pipe(
      map(this.setHeaders(request)),
      mergeMap(req => next.handle(req)),

      catchError(error => {
        // Server sends 419 when token expires
        if (error.status === 419) {
          return this.auth.refreshToken().pipe(
            map(this.setHeaders(request)),
            mergeMap(req => next.handle(req))
          );
        }

        // Server sends 403 when token is blacklisted
        if (error.status === 403 || error.status === 401) {
          this.auth.logout(true);
        }

        return throwError(error);
      })
    );
  }

  requestIsExcluded(request: HttpRequest<any>) {
    const hasWildcard = this.unauthenticatedEndpoints.indexOf("*") !== -1;
    if (hasWildcard) return true;

    const reqUrl = request.url;
    return !!this.unauthenticatedEndpoints.find((url: string) =>
      reqUrl.includes(url)
    );
  }
}

export const AppInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};
