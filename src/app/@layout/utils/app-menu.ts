export interface MenuItem {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const APP_MENU: MenuItem[] = [
  { path: "dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  {
    path: "institutions",
    title: "Instituciones",
    icon: "location_city",
    class: ""
  },
  { path: "categories", title: "Categorías", icon: "content_paste", class: "" },
  { path: "typography", title: "Typography", icon: "library_books", class: "" },
  { path: "icons", title: "Icons", icon: "bubble_chart", class: "" },
  { path: "maps", title: "Maps", icon: "location_on", class: "" },
  {
    path: "notifications",
    title: "Notifications",
    icon: "notifications",
    class: ""
  },
  {
    path: "upgrade",
    title: "Upgrade to PRO",
    icon: "unarchive",
    class: "active-pro"
  }
];
