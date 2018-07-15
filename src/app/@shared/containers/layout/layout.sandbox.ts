import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/root-store";
import * as fromAuth from "../../../auth/store";
import { Observable } from "rxjs";
import { User, AppSettings, UserSettings, Notification } from "../../models";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LayoutSandbox {
  // (UI) App Loading Status
  isLoading$: Observable<boolean> = this.rootStore.select(
    fromRoot.selectAppIsLoading
  );

  // (UI) App Sidebar Status
  secondarySidebarOpened$: Observable<boolean> = this.rootStore.select(
    fromRoot.selectSecondarySidebarOpened
  );

  // User and Settings
  appSettings$: Observable<AppSettings> = this.rootStore.select(
    fromRoot.selectAppSettings
  );

  userSettings$: Observable<UserSettings> = this.authStore.select(
    fromAuth.selectUserSettings
  );

  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private authStore: Store<fromAuth.AuthState>
  ) {
    this.rootStore.dispatch(new fromRoot.LoadAppSettings());
  }

  saveSettings(appSettings: AppSettings, userSettings: UserSettings) {
    this.authStore.dispatch(new fromAuth.SaveUserSettings(userSettings));
    this.rootStore.dispatch(new fromRoot.SaveAppSettings(appSettings));
    this.rootStore.dispatch(new fromRoot.HideSecondarySidebar());
  }

  closeSidebar() {
    this.rootStore.dispatch(new fromRoot.HideSecondarySidebar());
  }
}
