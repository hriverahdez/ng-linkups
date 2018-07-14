import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Subnet } from "../../../@shared/models";
import { IpHelperService } from "../../../@shared/utility/ip-helper.service";

@Component({
  selector: "lnk-subnet-detail",
  templateUrl: "./subnet-detail.component.html",
  styleUrls: ["./subnet-detail.component.scss"]
})
export class SubnetDetailComponent implements OnInit {
  @Input() subnet: Subnet;

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
}
