import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Subnet } from "../../models/subnet.model";
import { IpHelperService } from "../../services/index";

@Component({
  selector: "lnk-subnet-detail",
  templateUrl: "./subnet-detail.component.html",
  styleUrls: ["./subnet-detail.component.scss"]
})
export class SubnetDetailComponent implements OnInit {
  isSelected: boolean = false;
  @Input() isAssigning: boolean = false;
  @Input() subnet: Subnet;

  @Output() onSelect = new EventEmitter<Subnet>();
  @Output() onEditRequest = new EventEmitter<Subnet>();
  @Output() onDeleteRequest = new EventEmitter<Subnet>();

  fullmask: string;
  usableHosts: number;
  broadcast: string;

  constructor(private ipHelper: IpHelperService) {}

  ngOnInit() {
    this.fullmask = this.ipHelper.obtainNetmask(this.subnet.mask);
    this.usableHosts = this.ipHelper.getUsableHosts(this.subnet.mask);
    this.broadcast = this.ipHelper.getBroadcast(
      this.subnet.ip,
      this.subnet.mask
    );
  }

  requestEdit() {
    this.onEditRequest.emit(this.subnet);
  }

  requestDelete() {
    this.onDeleteRequest.emit(this.subnet);
  }

  panelClicked() {
    console.log("now");
    if (this.isAssigning) this.onSelect.emit(this.subnet);
  }
}
