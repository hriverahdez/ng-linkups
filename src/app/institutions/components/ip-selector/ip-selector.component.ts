import { Component, forwardRef, Input } from "@angular/core";

import * as fromSubnetContainers from "../../../subnets/containers";
import * as fromSharedServices from "../../../@shared/services";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Subnet } from "../../../subnets/models/subnet.model";

const IP_SELECTOR_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IpSelectorComponent),
  multi: true
};

@Component({
  selector: "lnk-ip-selector",
  providers: [IP_SELECTOR_ACCESSOR],
  templateUrl: "./ip-selector.component.html",
  styleUrls: ["./ip-selector.component.scss"]
})
export class IpSelectorComponent implements ControlValueAccessor {
  value: string;
  displayValue: Subnet;

  @Input() placeholder: string;

  onTouch: Function;
  onModelChange: Function;

  constructor(private dialogService: fromSharedServices.DialogService) {}

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  openSubnetDialog() {
    this.dialogService
      .customDialogComponent(fromSubnetContainers.SubnetsDialogComponent, {
        width: "80%",
        disableClose: true
      })
      .subscribe(dialogResult => this.setSelectedSubnet(dialogResult));
  }

  setSelectedSubnet(subnet: Subnet) {
    if (subnet) {
      this.displayValue = subnet;
      this.value = subnet._id;
      this.onTouch();
      this.onModelChange(this.value);
    }
  }

  get formattedValue() {
    return this.displayValue
      ? `${this.displayValue.ip}/${this.displayValue.mask}`
      : "";
  }
}
