import { AppComponent } from "./app/app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const containers: any[] = [
  AppComponent,
  LoginComponent,
  RegisterComponent
];

export * from "./app/app.component";
export * from "./login/login.component";
export * from "./register/register.component";
