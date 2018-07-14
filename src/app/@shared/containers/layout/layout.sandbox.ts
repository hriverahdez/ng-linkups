import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/root-store";
import * as fromAuth from "../../../auth/store";
import { Observable } from "rxjs";
import { User, AppSettings, UserSettings } from "../../models";

@Injectable({
  providedIn: "root"
})
export class LayoutSandbox {
  isLoading$: Observable<boolean> = this.rootStore.select(
    fromRoot.selectAppIsLoading
  );

  secondarySidebarOpened$: Observable<boolean> = this.rootStore.select(
    fromRoot.selectSecondarySidebarOpened
  );

  appSettings$: Observable<AppSettings> = this.rootStore.select(
    fromRoot.selectAppSettings
  );

  userSettings$: Observable<UserSettings> = this.authStore.select(
    fromAuth.selectUserSettings
  );

  currentUser$: Observable<User> = this.authStore.select(
    fromAuth.selectCurrentUser
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

  toggleSidebar() {
    this.rootStore.dispatch(new fromRoot.ShowSecondarySidebar());
  }

  closeSidebar() {
    this.rootStore.dispatch(new fromRoot.HideSecondarySidebar());
  }

  logOut() {
    this.authStore.dispatch(new fromAuth.Logout());
  }
}
