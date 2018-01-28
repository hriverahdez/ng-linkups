import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromRoot from "../../../@core/store";
import * as fromStore from "../../store";
import { Subnet } from "../../models/subnet.model";

@Component({
  selector: "lnk-subnets",
  templateUrl: "./subnets.component.html",
  styleUrls: ["./subnets.component.scss"]
})
export class SubnetsComponent implements OnInit {
  subnets$: Observable<Subnet[]>;
  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private store: Store<fromStore.SubnetsState>
  ) {}

  ngOnInit() {
    this.subnets$ = this.store.select(fromStore.getAllSubnets);
    this.store.dispatch(new fromStore.LoadSubnets());
  }

  addSubnet() {
    this.rootStore.dispatch(new fromRoot.Go({ path: ["/app/subnets/add"] }));
  }
}
