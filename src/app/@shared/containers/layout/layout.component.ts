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

  currentUser$: Observable<User>;
  appSettings$: Observable<AppSettings>;

  constructor(private sb: LayoutSandbox) {}

  ngOnInit() {
    this.isLoading$ = this.sb.isLoading$;
    this.secondarySidebarOpened$ = this.sb.secondarySidebarOpened$;
    this.currentUser$ = this.sb.currentUser$;
    this.appSettings$ = this.sb.appSettings$;
  }

  onSettingsSaved(settings: {
    appSettings: AppSettings;
    userSettings: UserSettings;
  }) {
    this.sb.saveSettings(settings.appSettings, settings.userSettings);
  }

  toggle() {
    this.sb.toggleSidebar();
  }

  close() {
    this.sb.closeSidebar();
  }

  logOut() {
    this.sb.logOut();
  }
}
