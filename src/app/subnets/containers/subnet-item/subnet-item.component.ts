import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import * as fromRoot from "../../../@core/root-store";
import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { Subnet } from "../../../@shared/models";

@Component({
  selector: "lnk-subnet-item",
  templateUrl: "./subnet-item.component.html",
  styleUrls: ["./subnet-item.component.scss"]
})
export class SubnetItemComponent implements OnInit {
  subnet$: Observable<Subnet>;
  constructor(
    private store: Store<fromStore.SubnetsState>,
    private rootStore: Store<fromRoot.AppState>
  ) {}

  ngOnInit() {
    this.subnet$ = this.store.select(fromStore.getSelectedSubnet);
  }

  createSubnet(subnet: Subnet) {
    this.store.dispatch(new fromStore.AddSubnet(subnet));
  }

  createSubnetRange(rangeData) {
    this.store.dispatch(new fromStore.AddSubnetRange(rangeData));
  }

  updateSubnet(subnet: Subnet) {
    this.store.dispatch(new fromStore.UpdateSubnet(subnet));
  }

  cancel() {
    this.rootStore.dispatch(new fromRoot.Go({ path: ["/app/subnets"] }));
  }
}
