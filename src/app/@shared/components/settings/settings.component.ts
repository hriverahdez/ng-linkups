import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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

  @Output()
  savedSettings = new EventEmitter<{
    appSettings: AppSettings;
    userSettings: UserSettings;
  }>();

  @Output() closed = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  saveSettings(settings) {
    this.savedSettings.emit({ appSettings: settings, userSettings: settings });
  }

  close() {
    this.closed.emit();
  }
}
