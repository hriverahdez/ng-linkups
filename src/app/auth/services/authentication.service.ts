import { Injectable } from "@angular/core";

import { RequestOptions } from "@angular/http";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";

import { map, tap, catchError, finalize } from "rxjs/operators";
import { User, UserSettings } from "../../@shared/models";
import { Router } from "@angular/router";
import { BaseAuthenticator } from "./base-authenticator";
import { ConfigService } from "../../app-config.service";
import { AuthenticationContract } from "./authentication-contract";

@Injectable({ providedIn: "root" })
export class AuthenticationService extends BaseAuthenticator<User>
  implements AuthenticationContract<User> {
  private logoutRedirectUrl = "/login";

  constructor(
    http: HttpClient,
    configService: ConfigService,
    private router: Router
  ) {
    super(http, configService);
  }

  login(user: User): Observable<User> {
    let authEncoded = btoa(user.email + ":" + user.password);
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: "Basic " + authEncoded
    });

    return this.http
      .post<User>(
        `${environment.apiURL}/auth`,
        { access_token: environment.masterKey },
        { headers: headers, reportProgress: true }
      )
      .pipe(
        map((loginResponse: any) => {
          this.storeUserInfo(loginResponse.user);
          this.saveTokenInLocalStorage(loginResponse.token);
          return loginResponse.user;
        })
      );
  }

  register(user: User): Observable<User> {
    let authEncoded = btoa(user.email + ":" + user.password);
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: "Basic " + authEncoded
    });
    return this.http
      .post<User>(
        `${environment.apiURL}/users`,
        { access_token: environment.masterKey, ...user },
        { headers: headers, reportProgress: true }
      )
      .pipe(
        map((registerResponse: any) => {
          this.storeUserInfo(registerResponse.user);
          this.saveTokenInLocalStorage(registerResponse.token);
          return registerResponse.user;
        })
      );
  }

  /**
   * Log out user
   * @param redirect Redirect after logout. Default false
   */
  logout(redirect = false) {
    super.logout();

    if (redirect) {
      const logoutRedirectUrl = this.configService.get("auth")
        ? this.configService.get("auth").logoutRedirectUrl
        : this.logoutRedirectUrl;

      this.router.navigateByUrl(logoutRedirectUrl);
    }
  }

  saveUserSettings(settings: UserSettings): Observable<UserSettings> {
    return this.http
      .post<User>(`${environment.apiURL}/users/saveSettings`, settings)
      .pipe(
        tap((user: User) => this.storeUserInfo(user)),
        map((user: User) => user.settings),
        catchError(error => throwError(error))
      );
  }
}
