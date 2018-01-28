import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import { Subnet } from "../../models/subnet.model";

@Component({
  selector: "lnk-subnet-item",
  templateUrl: "./subnet-item.component.html",
  styleUrls: ["./subnet-item.component.scss"]
})
export class SubnetItemComponent implements OnInit {
  constructor(private store: Store<fromStore.SubnetsState>) {}

  ngOnInit() {}

  createSubnet(subnet: Subnet) {
    this.store.dispatch(new fromStore.AddSubnet(subnet));
  }
}
