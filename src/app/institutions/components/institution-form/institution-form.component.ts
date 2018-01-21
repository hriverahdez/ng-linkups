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

import { Institution } from "../../models/institution.model";
import { Category } from "../../../categories/models/category.model";

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
    }
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
      this.onUpdate.emit({ ...this.institution, ...value });
    }
  }

  toFormGroup() {
    return this.fb.group({
      category: [""],
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
      has_internet: [""]
    });
  }

  get nameControl() {
    return this.institutionForm.get("name") as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError("required");
  }

  get lineNumberControl() {
    return this.institutionForm.get("line_number") as FormControl;
  }

  get lineNumberControlInvalid() {
    return this.lineNumberControl.hasError("required");
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
    return this.wanControl.hasError("required");
  }
}
