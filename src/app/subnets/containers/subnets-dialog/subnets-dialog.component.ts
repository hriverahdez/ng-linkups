import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs/Observable";
import { Subnet } from "../../models/subnet.model";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "lnk-subnets-dialog",
  templateUrl: "./subnets-dialog.component.html",
  styleUrls: ["./subnets-dialog.component.scss"]
})
export class SubnetsDialogComponent implements OnInit {
  currentTab = "subnet-list";
  subnets$: Observable<Subnet[]>;
  selectedSubnet: Subnet = null;
  constructor(
    private store: Store<fromStore.SubnetsState>,
    public dialogRef: MatDialogRef<SubnetsDialogComponent>
  ) {}

  ngOnInit() {
    this.subnets$ = this.store.select(fromStore.getAllAvailableSubnets);
  }

  createSubnet(subnet: Subnet) {
    this.store.dispatch(new fromStore.AddSubnetFromModal(subnet));
    this.selectedSubnet = subnet;
    this.setSelectedSubnet();
  }

  setCurrentTab(tabID) {
    this.currentTab = tabID;
  }

  setSelectedSubnet() {
    this.dialogRef.close(this.selectedSubnet);
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
