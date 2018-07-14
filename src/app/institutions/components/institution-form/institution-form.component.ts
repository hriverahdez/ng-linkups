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
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

import { IP_MASK_REGEXP } from "../../../@shared/utils/ip-regex";
import { Institution, Category } from "../../../@shared/models";

@Component({
  selector: "lnk-institution-form",
  templateUrl: "./institution-form.component.html",
  styleUrls: ["./institution-form.component.scss"]
})
export class InstitutionFormComponent implements OnChanges {
  exists: boolean = false;
  institutionForm: FormGroup = this.toFormGroup();

  @Input() institution: Institution;
  @Input() categories: Category[];
  @Output() onCreate = new EventEmitter<Institution>();
  @Output() onUpdate = new EventEmitter<Institution>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.institution) {
      this.exists = true;
      this.institutionForm.patchValue(this.institution);
      this.institutionForm
        .get("category")
        .setValue(this.institution.category._id);
    }
  }

  create(form: FormGroup) {
    const { valid, value } = form;
    const wan = value.wan._id;
    const lan = value.lan ? value.lan._id : null;
    if (valid) {
      this.onCreate.emit({ ...value, wan, lan });
    }
  }

  update(form: FormGroup) {
    const { valid, value } = form;
    const wan = value.wan._id;
    const lan = value.lan ? value.lan._id : null;
    if (valid) {
      this.onUpdate.emit({ ...this.institution, ...value, wan, lan });
    }
  }

  toFormGroup() {
    return this.fb.group({
      category: ["", Validators.required],
      line_number: ["", Validators.required],
      name: ["", Validators.required],
      location: ["", Validators.required],
      wan: ["", Validators.required],
      lan: [""],
      bandwidth: [""],
      state: [""],
      final_destination: [""],
      gate_type: [""],
      last_report: [""],
      phone_number: [""],
      has_internet: [""],
      notes: [""]
    });
  }

  get selectedCategory() {
    return this.institution && this.institution.category
      ? this.institution.category
      : null;
  }

  get categoryControl() {
    return this.institutionForm.get("category") as FormControl;
  }

  get categoryControlInvalid() {
    return this.categoryControl.hasError("required");
  }

  get lineNumberControl() {
    return this.institutionForm.get("line_number") as FormControl;
  }

  get lineNumberControlInvalid() {
    return this.lineNumberControl.hasError("required");
  }

  get nameControl() {
    return this.institutionForm.get("name") as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError("required");
  }

  get locationControl() {
    return this.institutionForm.get("location") as FormControl;
  }

  get locationControlInvalid() {
    return this.locationControl.hasError("required");
  }

  get wanControl() {
    return this.institutionForm.get("wan") as FormControl;
  }

  get wanControlInvalid() {
    return (
      this.wanControl.hasError("required") ||
      this.wanControl.hasError("pattern")
    );
  }
}
