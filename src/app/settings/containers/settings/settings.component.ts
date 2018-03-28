import { Component, OnInit } from "@angular/core";

import * as fromStore from "../../store";
import * as fromRoot from "../../../@core/store";
import * as fromLayout from "../../../@layout/store";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../../models/app-settings.model";
import { Store } from "@ngrx/store";
import { UserSettings } from "../../../@core/models/user-settings.model";

@Component({
  selector: "lnk-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  appSettings$: Observable<AppSettings>;
  userSettings$: Observable<UserSettings>;

  constructor(
    private store: Store<fromStore.SettingsState>,
    private rootStore: Store<fromRoot.AppState>,
    private layoutStore: Store<fromLayout.LayoutState>
  ) {}

  ngOnInit() {
    this.appSettings$ = this.store.select(fromStore.getAppSettings);
    this.userSettings$ = this.store.select(fromRoot.getUserSettings);
    this.store.dispatch(new fromStore.LoadAppSettings());
  }

  saveSettings(settings) {
    this.store.dispatch(new fromStore.SaveUserSettings(settings));
    this.store.dispatch(new fromStore.SaveAppSettings(settings));
    this.layoutStore.dispatch(new fromLayout.HideSecondarySidebar());
  }

  close() {
    this.layoutStore.dispatch(new fromLayout.HideSecondarySidebar());
  }
}
