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
export class NavbarSandbox {
  appSettings$: Observable<AppSettings> = this.rootStore.select(
    fromRoot.selectAppSettings
  );

  currentUser$: Observable<User> = this.authStore.select(
    fromAuth.selectCurrentUser
  );

  /** Notifications */
  // Only get 10 notifications to display on navbar
  unreadNotifications$: Observable<Notification[]> = this.rootStore
    .select(fromRoot.selectUnreadNotifications)
    .pipe(map(n => n.slice(0, 10)));

  // Notifications loading status
  notificationsLoading$ = this.rootStore.select(
    fromRoot.selectNotificationsLoading
  );

  // Unread notifications count
  unreadNotificationsCount$ = this.rootStore.select(
    fromRoot.selectUnreadNotificationsCount
  );

  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private authStore: Store<fromAuth.AuthState>
  ) {}

  toggleSidebar() {
    this.rootStore.dispatch(new fromRoot.ShowSecondarySidebar());
  }

  logOut() {
    this.authStore.dispatch(new fromAuth.Logout());
  }
}
