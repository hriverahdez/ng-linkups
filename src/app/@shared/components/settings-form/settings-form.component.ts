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
import { UserSettings } from "../../models";

@Component({
  selector: "lnk-settings-form",
  templateUrl: "./settings-form.component.html",
  styleUrls: ["./settings-form.component.scss"]
})
export class SettingsFormComponent implements OnChanges {
  settingsForm: FormGroup = this.toFormGroup();
  @Input() appSettings: AppSettings;
  @Input() userSettings: UserSettings;
  @Output() onSaveSettings = new EventEmitter<AppSettings>();

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.settingsForm.patchValue({ ...this.appSettings, ...this.userSettings });
  }

  toFormGroup(): FormGroup {
    return this.fb.group({
      provinceName: [""],
      enableRegistration: [false],
      showLineNumber: [false]
    });
  }

  save(form: FormGroup) {
    const { value } = form;
    this.onSaveSettings.emit(value);
  }
}
