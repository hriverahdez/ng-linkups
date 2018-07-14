import { Component, OnInit } from "@angular/core";
import { AppSandbox } from "./app.sandbox";

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>"
})
export class AppComponent implements OnInit {
  title = "Linkups v2.0";

  constructor(private appSandbox: AppSandbox) {}

  ngOnInit(): void {
    this.appSandbox.loadUser();
  }
}
