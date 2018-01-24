import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Subnet } from "../../models/subnet.model";

@Component({
  selector: "lnk-subnet-detail",
  templateUrl: "./subnet-detail.component.html",
  styleUrls: ["./subnet-detail.component.scss"]
})
export class SubnetDetailComponent implements OnInit {
  @Input() subnet: Subnet;

  @Output() onEditRequest = new EventEmitter<Subnet>();
  @Output() onDeleteRequest = new EventEmitter<Subnet>();

  constructor() {}

  ngOnInit() {}

  requestEdit() {
    this.onEditRequest.emit(this.subnet);
  }

  requestDelete() {
    this.onDeleteRequest.emit(this.subnet);
  }
}
