import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "lnk-subnet-range-preview",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./subnet-range-preview.component.html",
  styleUrls: ["./subnet-range-preview.component.scss"]
})
export class SubnetRangePreviewComponent implements OnInit {
  @Input() range: string[];

  constructor() {}

  ngOnInit() {}
}
