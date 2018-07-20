import { Injectable } from "@angular/core";
import { Observable, throwError, of, empty, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ConfigService {
  private config: Object;
  private env: Object;
  private loaded: boolean = false;
  private hasLoaded = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  /**
   * Loads the environment config file first. Reads the environment variable from the file
   * and based on that loads the appropriate configuration file - development or production
   */
  load() {
    this.hasLoaded.next(false);
    // return new Promise((resolve, reject) => {
    const configObs = this.http.get<{ env: string }>("/config/env.json");

    configObs.subscribe(env_data => {
      this.env = env_data;

      this.http
        .get("/config/" + env_data.env + ".json")
        .pipe(
          catchError((error: any) => {
            return throwError(error.json().error || "Server error");
          })
        )
        .subscribe(data => {
          env_data.env === "development"
            ? console.log(".:CONFIG LOADED:.", data)
            : null;
          this.config = data;
          this.hasLoaded.next(true);
          // resolve();
          return;
        });
    });

    return configObs.toPromise();
    // });
  }

  configHasLoaded() {
    return this.hasLoaded.asObservable();
  }

  /**
   * Returns environment variable based on given key
   *
   * @param key
   */
  getEnv(key: any) {
    return this.env[key];
  }

  /**
   * Returns configuration value based on given key
   *
   * @param key
   */
  get(key: any) {
    return this.config[key];
  }
}
