import { Component, OnInit, Input } from "@angular/core";

import { AppSettings } from "../../models/app-settings.model";
import { UserSettings } from "../../models";

@Component({
  selector: "lnk-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  @Input() appSettings: AppSettings;
  @Input() userSettings: UserSettings;

  constructor() // private store: Store<fromStore.SettingsState>,
  // private rootStore: Store<fromRoot.AppState>,
  // private layoutStore: Store<fromLayout.LayoutState>
  {}

  ngOnInit() {
    // this.appSettings$ = this.store.select(fromStore.selectAppSettings);
    // this.userSettings$ = this.store.select(fromRoot.getUserSettings);
    // this.store.dispatch(new fromStore.LoadAppSettings());
  }

  saveSettings(settings) {
    // this.store.dispatch(new fromStore.SaveUserSettings(settings));
    // this.store.dispatch(new fromStore.SaveAppSettings(settings));
    // this.layoutStore.dispatch(new fromLayout.HideSecondarySidebar());
  }

  close() {
    // this.layoutStore.dispatch(new fromLayout.HideSecondarySidebar());
  }
}
