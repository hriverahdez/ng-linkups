export interface MenuItem {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const APP_MENU: MenuItem[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  {
    path: "/institutions",
    title: "Instituciones",
    icon: "location_city",
    class: ""
  },
  { path: "/categories", title: "Categorías", icon: "view_module", class: "" },
  { path: "/subnets", title: "Subredes", icon: "router", class: "" },
  { path: "/users", title: "Usuarios", icon: "supervisor_account", class: "" }
];
