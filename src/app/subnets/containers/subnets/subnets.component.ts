import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromRoot from "../../../@core/root-store";
import * as fromStore from "../../store";
import { DialogService } from "../../../@shared/utility/dialog.service";
import { Subnet } from "../../../@shared/models";

@Component({
  selector: "lnk-subnets",
  templateUrl: "./subnets.component.html",
  styleUrls: ["./subnets.component.scss"]
})
export class SubnetsComponent implements OnInit {
  subnets$: Observable<Subnet[]>;
  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private store: Store<fromStore.SubnetsState>,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.subnets$ = this.store.select(fromStore.getAllSubnets);
    // this.store.dispatch(new fromStore.LoadSubnets());
  }

  addSubnetPage() {
    this.rootStore.dispatch(new fromRoot.Go({ path: ["/app/subnets/add"] }));
  }

  deleteSubnet(subnet: Subnet) {
    this.dialogService
      .confirm("¿Está seguro que desea eliminar esta subred?")
      .subscribe(
        dialogResult =>
          dialogResult
            ? this.store.dispatch(new fromStore.DeleteSubnet(subnet))
            : false
      );
  }
}
