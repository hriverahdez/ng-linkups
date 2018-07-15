import { Component, OnInit } from "@angular/core";
import { LayoutSandbox } from "./layout.sandbox";
import { Observable } from "rxjs";
import { User, AppSettings, UserSettings } from "../../models";

@Component({
  selector: "lnk-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  isLoading$: Observable<boolean>;
  secondarySidebarOpened$: Observable<boolean>;

  appSettings$: Observable<AppSettings>;
  userSettings$: Observable<UserSettings>;

  constructor(private sb: LayoutSandbox) {}

  ngOnInit() {
    this.isLoading$ = this.sb.isLoading$;
    this.secondarySidebarOpened$ = this.sb.secondarySidebarOpened$;
    this.appSettings$ = this.sb.appSettings$;
    this.userSettings$ = this.sb.userSettings$;
  }

  onSettingsSaved(settings: {
    appSettings: AppSettings;
    userSettings: UserSettings;
  }) {
    this.sb.saveSettings(settings.appSettings, settings.userSettings);
  }

  close() {
    this.sb.closeSidebar();
  }
}
