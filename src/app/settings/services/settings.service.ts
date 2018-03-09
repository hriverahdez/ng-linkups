import { Injectable } from "@angular/core";
import { AbstractDataService } from "../../@shared/utils/abstract-data-service";
import { AppSettings } from "../models/app-settings.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SettingsService extends AbstractDataService<AppSettings> {
  constructor(http: HttpClient) {
    super(http, "app-settings");
  }
}
