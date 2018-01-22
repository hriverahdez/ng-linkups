import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { tap, filter, take, map } from "rxjs/operators";

import { Institution } from "../../models/institution.model";
import { Category } from "../../../categories/models/category.model";

import * as fromStore from "../../store";
import * as fromCategoriesFeature from "../../../categories/store";

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
    console.log(institution);
    // this.store.dispatch(new fromStore.UpdateInstitution(institution));
  }
}
