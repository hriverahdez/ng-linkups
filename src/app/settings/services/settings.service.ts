import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AbstractDataService } from "../../@shared/asyncServices/http/abstract-data-service";
import { AppSettings, UserSettings, User } from "../../@shared/models";
import { AuthenticationService } from "../../auth/services";

@Injectable()
export class SettingsService extends AbstractDataService<AppSettings> {
  constructor(
    http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    super(http, "app-settings");
  }

  saveUserSettings(settings: UserSettings): Observable<UserSettings> {
    return this.http
      .post<User>(`${environment.apiURL}/users/saveSettings`, settings)
      .pipe(
        tap((user: User) =>
          this.authenticationService.updateCurrentUserInfo(user)
        ),
        map((user: User) => user.settings),
        catchError(error => throwError(error))
      );
  }
}
