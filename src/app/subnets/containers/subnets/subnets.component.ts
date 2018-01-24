import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import * as fromStore from "../../store";
import { Subnet } from "../../models/subnet.model";

@Component({
  selector: "lnk-subnets",
  templateUrl: "./subnets.component.html",
  styleUrls: ["./subnets.component.scss"]
})
export class SubnetsComponent implements OnInit {
  subnets$: Observable<Subnet[]>;
  constructor(private store: Store<fromStore.SubnetsState>) {}

  ngOnInit() {
    this.subnets$ = this.store.select(fromStore.getAllSubnets);
    this.store.dispatch(new fromStore.LoadSubnets());
  }
}
