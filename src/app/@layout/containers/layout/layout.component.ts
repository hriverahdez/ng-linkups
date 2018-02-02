import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromLayout from "../../../@layout/store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "lnk-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private rootStore: Store<fromLayout.LayoutState>) {}

  ngOnInit() {
    this.isLoading$ = this.rootStore.select(fromLayout.getAppLoading);
  }
}
