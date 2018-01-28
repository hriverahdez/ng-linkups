import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

import { Subnet } from "../../models/subnet.model";
import { IP_REGEXP } from "../../../@shared/utils/ip-regex";
import { CustomErrorStateMatcher } from "../../../@shared/utils/error-state-matcher";

@Component({
  selector: "lnk-subnet-form",
  templateUrl: "./subnet-form.component.html",
  styleUrls: ["./subnet-form.component.scss"]
})
export class SubnetFormComponent implements OnInit {
  exists: boolean = false;

  subnetForm: FormGroup;
  @Input() subnet: Subnet;

  @Output() onCreate = new EventEmitter<Subnet>();
  @Output() onUpdate = new EventEmitter<Subnet>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subnetForm = this.toFormGroup();
  }

  toFormGroup() {
    return this.fb.group({
      ip: ["", [Validators.required, Validators.pattern(IP_REGEXP)]],
      mask: [24]
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
      this.onUpdate.emit({ ...this.subnet, ...value });
    }
  }

  get ipControl() {
    return this.subnetForm.get("ip") as FormControl;
  }

  get ipControlInvalid() {
    return (
      this.ipControl.hasError("required") || this.ipControl.hasError("pattern")
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
