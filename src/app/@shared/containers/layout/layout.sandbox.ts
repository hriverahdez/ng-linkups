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

  //   userSettings$: Observable<UserSettings> = this.rootStore.select(fromRoot)

  currentUser$: Observable<User> = this.authStore.select(
    fromAuth.selectCurrentUser
  );

  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private authStore: Store<fromAuth.AuthState>
  ) {
    this.rootStore.dispatch(new fromRoot.LoadAppSettings());
  }

  toggleSidebar() {
    this.rootStore.dispatch(new fromRoot.ShowSecondarySidebar());
  }

  closeSidebar() {
    this.rootStore.dispatch(new fromRoot.HideSecondarySidebar());
  }
}
