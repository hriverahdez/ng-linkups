import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { IP_REGEXP } from "../../../@shared/utils/ip-regex";
import { IpHelperService } from "../../../@shared/utility/ip-helper.service";

@Component({
  selector: "lnk-subnet-range-form",
  templateUrl: "./subnet-range-form.component.html",
  styleUrls: ["./subnet-range-form.component.scss"]
})
export class SubnetRangeFormComponent implements OnInit {
  subnetRangeForm: FormGroup;
  range: string[] = null;

  @Output() onCreate = new EventEmitter<{ range: string[]; mask: number }>();

  constructor(private ipHelper: IpHelperService, private fb: FormBuilder) {}

  ngOnInit() {
    this.subnetRangeForm = this.toFormGroup();
  }

  toFormGroup() {
    return this.fb.group({
      startIp: ["", [Validators.required, Validators.pattern(IP_REGEXP)]],
      endIp: ["", [Validators.required, Validators.pattern(IP_REGEXP)]],
      mask: [24]
    });
  }

  rangeIsValid(form: FormGroup) {
    const { startIp, endIp, mask } = form.value;
    return this.ipHelper.rangeIsValid(startIp, endIp, mask);
  }

  previewRange(form: FormGroup) {
    if (!this.startIpControlInvalid && !this.endIpControlInvalid) {
      const { startIp, endIp, mask } = form.value;
      if (this.rangeIsValid(form)) {
        this.range = this.ipHelper.getSubnetsInRange(startIp, endIp, mask);
      } else {
        this.range = null;
      }
    }
  }

  createRange(form: FormGroup) {
    if (this.range) {
      const { mask } = form.value;
      this.onCreate.emit({ range: this.range, mask });
    }
  }

  get startIpControl() {
    return this.subnetRangeForm.get("startIp") as FormControl;
  }

  get startIpControlInvalid() {
    return (
      this.startIpControl.hasError("required") ||
      this.startIpControl.hasError("pattern")
    );
  }

  get endIpControl() {
    return this.subnetRangeForm.get("startIp") as FormControl;
  }

  get endIpControlInvalid() {
    return (
      this.startIpControl.hasError("required") ||
      this.startIpControl.hasError("pattern")
    );
  }

  get availableMasks() {
    let masks: any[] = [];
    for (let i = 8; i < 31; i++) {
      masks.push(i);
    }
    return masks;
  }
}
