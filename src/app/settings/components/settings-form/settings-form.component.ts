import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

import { AppSettings } from "../../models/app-settings.model";

@Component({
  selector: "lnk-settings-form",
  templateUrl: "./settings-form.component.html",
  styleUrls: ["./settings-form.component.scss"]
})
export class SettingsFormComponent implements OnChanges {
  settingsForm: FormGroup = this.toFormGroup();
  @Input() appSettings: AppSettings;
  @Output() onSaveSettings = new EventEmitter<AppSettings>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.settingsForm.patchValue(this.appSettings);
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      provinceName: [""],
      enableRegistration: [false]
    });
  }

  save(form: FormGroup) {
    const { value } = form;
    this.onSaveSettings.emit(value);
  }
}
