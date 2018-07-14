import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Category } from "../../../@shared/models";

@Component({
  selector: "lnk-category-form",
  templateUrl: "./category-form.component.html",
  styleUrls: ["./category-form.component.scss"]
})
export class CategoryFormComponent implements OnChanges {
  exists: boolean = false;
  categoryForm: FormGroup = this.toFormGroup();
  @Input() category;

  @Output() onCreate = new EventEmitter<Category>();
  @Output() onUpdate = new EventEmitter<Category>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.category) {
      this.exists = true;
      this.categoryForm.patchValue(this.category);
    }
  }

  toFormGroup() {
    return this.fb.group({
      name: ["", Validators.required],
      icon: [""]
    });
  }

  create(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      this.onCreate.emit(value);
    }
  }

  update(form: FormGroup) {
    const { valid, value } = form;
    if (valid) {
      this.onUpdate.emit({ ...this.category, ...value });
    }
  }

  get nameControl() {
    return this.categoryForm.get("name") as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError("required");
  }
}
