import { Component, OnInit } from "@angular/core";

import * as fromSubnetContainers from "../../../subnets/containers";
import * as fromSharedServices from "../../../@shared/services";

@Component({
  selector: "lnk-ip-selector",
  templateUrl: "./ip-selector.component.html",
  styleUrls: ["./ip-selector.component.scss"]
})
export class IpSelectorComponent implements OnInit {
  constructor(private dialogService: fromSharedServices.DialogService) {}

  ngOnInit() {}

  openSubnetDialog() {
    this.dialogService.customDialogComponent(
      fromSubnetContainers.SubnetsDialogComponent,
      {
        width: "80%",
        height: "80%"
      }
    );
  }
}
