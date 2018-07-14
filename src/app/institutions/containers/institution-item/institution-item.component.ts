import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

import * as fromStore from "../../store";
import * as fromCategoriesFeature from "../../../categories/store";
import { Institution, Category } from "../../../@shared/models";

@Component({
  selector: "lnk-institution-item",
  templateUrl: "./institution-item.component.html",
  styleUrls: ["./institution-item.component.scss"]
})
export class InstitutionItemComponent implements OnInit {
  institution$: Observable<Institution>;
  availableCategories$: Observable<Category[]>;

  constructor(
    private store: Store<fromStore.InstitutionsState>,
    private categoryStore: Store<fromCategoriesFeature.CategoriesState>
  ) {}

  ngOnInit() {
    this.availableCategories$ = this.categoryStore.select(
      fromCategoriesFeature.getAllCategories
    );
    this.institution$ = this.store
      .select(fromStore.getSelectedInstitution)
      .pipe(tap((institution: Institution = null) => institution));
  }

  create(institution: Institution) {
    this.store.dispatch(new fromStore.AddInstitution(institution));
  }

  update(institution: Institution) {
    this.store.dispatch(new fromStore.UpdateInstitution(institution));
  }
}
