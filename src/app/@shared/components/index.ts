import { AddNewButtonComponent } from "./add-new-button/add-new-button.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { DevelopmentInfoComponent } from "./development-info/development-info.component";
import { FooterComponent } from "./footer/footer.component";
import { LoaderComponent } from "./loader/loader.component";

import { NavDropdownComponent } from "./nav-dropdown/nav-dropdown.component";
import { NavbarNotificationsComponent } from "./navbar-notifications/navbar-notifications.component";
import { NavTogglerComponent } from "./nav-toggler/nav-toggler.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { SettingsComponent } from "./settings/settings.component";
import { SettingsFormComponent } from "./settings-form/settings-form.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

export const components: any[] = [
  AddNewButtonComponent,
  ConfirmDialogComponent,
  FooterComponent,
  DevelopmentInfoComponent,

  LoaderComponent,
  NavDropdownComponent,
  NavbarNotificationsComponent,
  NavTogglerComponent,

  PageNotFoundComponent,

  SettingsComponent,
  SettingsFormComponent,
  SidebarComponent
];

export * from "./add-new-button/add-new-button.component";
export * from "./confirm-dialog/confirm-dialog.component";
export * from "./development-info/development-info.component";
export * from "./footer/footer.component";

export * from "./loader/loader.component";
export * from "./navbar-notifications/navbar-notifications.component";
export * from "./nav-dropdown/nav-dropdown.component";
export * from "./nav-toggler/nav-toggler.component";

export * from "./page-not-found/page-not-found.component";

export * from "./settings/settings.component";
export * from "./settings-form/settings-form.component";
export * from "./sidebar/sidebar.component";
