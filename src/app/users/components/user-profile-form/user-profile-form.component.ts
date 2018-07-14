import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

import { User } from "../../../@core/models/user.model";
import { CustomValidator } from "../../../@shared/utils/custom-validation";

@Component({
  selector: "lnk-user-profile-form",
  templateUrl: "./user-profile-form.component.html",
  styleUrls: ["./user-profile-form.component.scss"]
})
export class UserProfileFormComponent implements OnChanges {
  profileForm: FormGroup = this.toFormGroup();
  @Input() user: User;
  @Output() onSave = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes): void {
    this.profileForm.patchValue(this.user);
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],

      passwordGroup: this.fb.group(
        {
          password: ["", [Validators.required, Validators.minLength(7)]],
          passwordConfirm: ["", [Validators.required, Validators.maxLength(15)]]
        },
        { validator: CustomValidator.childrenEqual }
      )
    });
  }

  save(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      this.onSave.emit(value);
    }
  }
}
