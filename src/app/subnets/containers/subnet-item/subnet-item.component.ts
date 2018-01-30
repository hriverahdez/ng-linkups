import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import { Subnet } from "../../models/subnet.model";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "lnk-subnet-item",
  templateUrl: "./subnet-item.component.html",
  styleUrls: ["./subnet-item.component.scss"]
})
export class SubnetItemComponent implements OnInit {
  subnet$: Observable<Subnet>;
  constructor(private store: Store<fromStore.SubnetsState>) {}

  ngOnInit() {
    this.subnet$ = this.store.select(fromStore.getSelectedSubnet);
  }

  createSubnet(subnet: Subnet) {
    this.store.dispatch(new fromStore.AddSubnet(subnet));
  }

  updateSubnet(subnet: Subnet) {
    this.store.dispatch(new fromStore.UpdateSubnet(subnet));
  }
}
