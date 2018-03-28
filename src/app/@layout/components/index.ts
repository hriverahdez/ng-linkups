import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavDropdownComponent } from "./nav-dropdown/nav-dropdown.component";
import { NavTogglerComponent } from "./nav-toggler/nav-toggler.component";
import { FooterComponent } from "./footer/footer.component";

import { DevelopmentInfoComponent } from "./development-info/development-info.component";

export const components: any[] = [
  SidebarComponent,
  NavDropdownComponent,
  NavTogglerComponent,
  FooterComponent,

  DevelopmentInfoComponent
];

export * from "./sidebar/sidebar.component";
export * from "./nav-dropdown/nav-dropdown.component";
export * from "./nav-toggler/nav-toggler.component";
export * from "./footer/footer.component";

export * from "./development-info/development-info.component";
