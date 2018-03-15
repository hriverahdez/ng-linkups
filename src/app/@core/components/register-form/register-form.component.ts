import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

import { User } from "../../models/user.model";

import { passwordMatcher } from "./passwordMatchValidator";

@Component({
  selector: "lnk-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  MIN_PASS_LENGTH = 6;
  MAX_PASS_LENGTH = 20;

  @Output() onRegister = new EventEmitter<User>();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: [
          "",
          Validators.required,
          Validators.minLength(this.MIN_PASS_LENGTH)
        ],
        passwordConfirm: [
          "",
          Validators.required,
          Validators.maxLength(this.MAX_PASS_LENGTH)
        ]
      })
    });

    const pwds = this.registerForm.get("passwords") as FormGroup;
    pwds.setValidators([passwordMatcher]);

    console.log("FORM:::", this.registerForm);
  }

  get nameControl() {
    return this.registerForm.get("name") as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError("required");
  }

  get emailControl() {
    return this.registerForm.get("email") as FormControl;
  }

  get emailControlInvalid() {
    return (
      this.emailControl.hasError("required") ||
      this.emailControl.hasError("email")
    );
  }

  // get passwordControl() {
  //   return this.registerForm.get("password") as FormControl;
  // }

  // get passwordConfirmControl() {
  //   return this.registerForm.get("passwordConfirm") as FormControl;
  // }

  // get passwordControlInvalid() {
  //   return this.passwordControl.hasError("passwordsDontMatch");
  // }

  // get passwordConfirmControlInvalid() {
  //   return this.passwordConfirmControl.hasError("passwordsDontMatch");
  // }
}
