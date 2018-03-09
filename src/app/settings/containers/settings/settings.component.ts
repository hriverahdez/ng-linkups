import { Component, OnInit } from "@angular/core";

import * as fromStore from "../../store";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "../../models/app-settings.model";
import { Store } from "@ngrx/store";

@Component({
  selector: "lnk-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  appSettings$: Observable<AppSettings>;

  constructor(private store: Store<fromStore.SettingsState>) {}

  ngOnInit() {
    this.appSettings$ = this.store.select(fromStore.getAppSettings);
    this.store.dispatch(new fromStore.LoadAppSettings());
  }
}
