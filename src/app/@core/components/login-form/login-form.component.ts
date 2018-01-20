import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

import { User } from "../../models/user.model";

@Component({
  selector: "lnk-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  @Output() onLogin = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  login(form: FormGroup) {
    const { valid, value } = form;

    if (valid) {
      this.onLogin.emit(value);
    }
  }

  get emailControl() {
    return this.loginForm.get("email") as FormControl;
  }

  get emailControlInvalid() {
    return (
      this.emailControl.hasError("required") ||
      this.emailControl.hasError("email")
    );
  }

  get passwordControl() {
    return this.loginForm.get("password") as FormControl;
  }

  get passwordControlInvalid() {
    return this.passwordControl.hasError("required");
  }
}
