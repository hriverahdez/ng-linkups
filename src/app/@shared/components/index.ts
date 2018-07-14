import { AddNewButtonComponent } from "./add-new-button/add-new-button.component";
import { LoaderComponent } from "./loader/loader.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavDropdownComponent } from "./nav-dropdown/nav-dropdown.component";
import { NavTogglerComponent } from "./nav-toggler/nav-toggler.component";
import { FooterComponent } from "./footer/footer.component";

import { DevelopmentInfoComponent } from "./development-info/development-info.component";
import { SettingsComponent } from "./settings/settings.component";
import { SettingsFormComponent } from "./settings-form/settings-form.component";

export const components: any[] = [
  LoaderComponent,
  AddNewButtonComponent,
  ConfirmDialogComponent,

  SidebarComponent,
  NavDropdownComponent,
  NavTogglerComponent,
  FooterComponent,

  DevelopmentInfoComponent,

  SettingsComponent,
  SettingsFormComponent
];

export * from "./loader/loader.component";
export * from "./add-new-button/add-new-button.component";
export * from "./confirm-dialog/confirm-dialog.component";

export * from "./sidebar/sidebar.component";
export * from "./nav-dropdown/nav-dropdown.component";
export * from "./nav-toggler/nav-toggler.component";
export * from "./footer/footer.component";

export * from "./development-info/development-info.component";
export * from "./settings/settings.component";
export * from "./settings-form/settings-form.component";
