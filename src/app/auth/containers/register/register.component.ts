import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { User } from "../../../@shared/models";
import { AuthSandbox } from "../../auth.sandbox";

@Component({
  selector: "lnk-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private sb: AuthSandbox) {}

  ngOnInit() {
    this.isLoading$ = this.sb.authLoading$;
  }

  register(user: User) {
    this.sb.register(user);
  }
}
