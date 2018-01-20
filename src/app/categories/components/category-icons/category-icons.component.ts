import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

import { MATERIAL_ICONS } from "./material-icons";

const CATEGORY_ICONS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CategoryIconsComponent),
  multi: true
};

@Component({
  selector: "lnk-category-icons",
  providers: [CATEGORY_ICONS_ACCESSOR],
  template: `
    <div class="category-icons">
      <div class="category-icons-item"
          [class.active]="isSelected(icon)" 
          *ngFor="let icon of icons"
          (click)="selectIcon(icon)">
        <mat-icon> {{icon}} </mat-icon>
      </div>
    </div>
  `,
  styleUrls: ["./category-icons.component.scss"]
})
export class CategoryIconsComponent implements ControlValueAccessor {
  icons = MATERIAL_ICONS;

  @Input() current;

  value: string;

  private onTouch: Function;
  private onModelChange: Function;

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectIcon(icon: string) {
    this.value = icon;
    this.onTouch();
    this.onModelChange(this.value);
  }

  isSelected(icon: string) {
    return icon === this.value;
  }
}
