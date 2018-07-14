import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/root-store";
import * as fromStore from "../../store";

import * as fromComponents from "../../components";
import { Institution, Category, UserSettings } from "../../../@shared/models";
import { DialogService } from "../../../@shared/utility/dialog.service";

@Component({
  selector: "lnk-institutions",
  templateUrl: "./institutions.component.html",
  styleUrls: ["./institutions.component.scss"]
})
export class InstitutionsComponent implements OnInit {
  institutions$: Observable<Institution[]>;
  categoriesInUse$: Observable<Category[]>;

  userSettings$: Observable<UserSettings>;

  constructor(
    private rootStore: Store<fromRoot.AppState>,
    private store: Store<fromStore.InstitutionsState>,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    // this.userSettings$ = this.rootStore.select(fromRoot.sele);
    this.institutions$ = this.store.select(fromStore.getAllInstitutions);
    this.categoriesInUse$ = this.store.select(
      fromStore.getInstitutionCategories
    );
  }

  addInstitution() {
    this.rootStore.dispatch(
      new fromRoot.Go({ path: ["/app/institutions/add"] })
    );
  }

  delete(institution: Institution) {
    this.store.dispatch(new fromStore.DeleteInstitution(institution));
  }
}
