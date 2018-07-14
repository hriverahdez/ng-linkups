import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { AppSettings } from "../models/app-settings.model";
import { HttpClient } from "@angular/common/http";
import { UserSettings } from "../../@core/models/user-settings.model";
import { User } from "../../@core/models/user.model";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../../@shared/services";

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
