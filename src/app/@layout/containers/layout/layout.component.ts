import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromLayout from "../../../@layout/store";
import { Observable } from "rxjs";

@Component({
  selector: "lnk-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  isLoading$: Observable<boolean>;
  secondarySidebarOpened$: Observable<boolean>;

  constructor(private rootStore: Store<fromLayout.LayoutState>) {}

  ngOnInit() {
    this.secondarySidebarOpened$ = this.rootStore.select(
      fromLayout.getSecondarySidebarOpened
    );
    this.isLoading$ = this.rootStore.select(fromLayout.getAppLoading);
  }

  toggle() {
    this.rootStore.dispatch(new fromLayout.ShowSecondarySidebar());
  }

  close() {
    this.rootStore.dispatch(new fromLayout.HideSecondarySidebar());
  }
}
