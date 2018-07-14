import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AbstractDataService } from "../../@shared/asyncServices/http/abstract-data-service";
import { AppSettings, UserSettings, User } from "../../@shared/models";
import { AuthenticationService } from "../../auth/services";

@Injectable({ providedIn: "root" })
export class SettingsService extends AbstractDataService<AppSettings> {
  constructor(
    http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    super(http, "app-settings");
  }
}
