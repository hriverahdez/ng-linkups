import { AuthenticationContract } from "./authentication-contract";
import { Observable, of } from "rxjs";
import { map, tap, finalize } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "../../app-config.service";
import { environment } from "../../../environments/environment";

export abstract class BaseAuthenticator<T> {
  private refreshTokenCall;

  protected baseUrl: string = "/api";

  constructor(
    protected http: HttpClient,
    protected configService: ConfigService
  ) {
    configService.configHasLoaded().subscribe(loaded => {
      if (loaded) {
        this.baseUrl = configService.get("api").baseUrl
          ? configService.get("api").baseUrl
          : environment.apiURL;
      }
    });
  }

  protected getTokenFromLocalStorage(): string {
    return localStorage.getItem("token");
  }

  protected saveTokenInLocalStorage(token: string) {
    localStorage.setItem("token", token);
  }

  /**
   * Get the current user's information saved in Local Storage
   */
  getCurrentUser(): T {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  /**
   * Stores the current user's information in Local Storage
   * @param user AuthUser
   */
  storeUserInfo(user: T) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  isAuthenticated() {
    const token = this.getTokenFromLocalStorage();
    return !!token;
  }

  /**
   * Returns an Observable of JWT Token. Attempts to retrieve the token from Local Storage
   * and if it fails calls refreshToken()
   */
  getToken(): Observable<string> {
    if (localStorage.getItem("token")) {
      return of(this.getTokenFromLocalStorage());
    }

    return this.refreshToken();
  }

  /**
   * Attempts to refresh a token calling the API. If it succeeds it
   * will save the new token in Local Storage to be used in subsequent requests
   */
  refreshToken(): Observable<string> {
    if (!this.refreshTokenCall) {
      this.refreshTokenCall = this.http.get(`${this.baseUrl}/refresh`).pipe(
        map((response: any) => this.getTokenFromRefreshResponse(response)),
        tap(this.saveTokenInLocalStorage),
        finalize(() => (this.refreshTokenCall = null))
      );
    }
    return this.refreshTokenCall;
  }

  private getTokenFromRefreshResponse(response): string {
    return response.token;
  }

  logout() {
    this.http.get(`${this.baseUrl}/logout`);
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
  }
}
