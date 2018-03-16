import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

import { User } from "../../models/user.model";

import {
  CustomValidator,
  ConfirmValidParentMatcher,
  errorMessages
} from "../../../@shared/utils/custom-validation";
import { error } from "util";

@Component({
  selector: "lnk-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  errors = errorMessages;

  validParentErrorMatcher: ConfirmValidParentMatcher = new ConfirmValidParentMatcher();

  @Output() onRegister = new EventEmitter<User>();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      emailGroup: this.fb.group(
        {
          email: ["", [Validators.required, Validators.email]],
          emailConfirm: ["", [Validators.required, Validators.email]]
        },
        { validator: CustomValidator.childrenEqual }
      ),

      passwordGroup: this.fb.group(
        {
          password: ["", [Validators.required, Validators.minLength(7)]],
          passwordConfirm: ["", [Validators.required, Validators.maxLength(15)]]
        },
        { validator: CustomValidator.childrenEqual }
      )
    });
  }

  register(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      const user: User = {
        name: value.name,
        email: value.emailGroup.email,
        password: value.passwordGroup.password
      };
      this.onRegister.emit(user);
    }
  }

  get nameControl() {
    return this.registerForm.get("name") as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError("required");
  }
}
