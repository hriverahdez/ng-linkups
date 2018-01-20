import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs/Observable";

import * as fromStore from "../../store";
import { Category } from "../../models/category.model";

@Component({
  selector: "lnk-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]>;
  constructor(private store: Store<fromStore.CategoriesState>) {}

  ngOnInit() {
    this.categories$ = this.store.select(fromStore.getAllCategories);
    this.store.dispatch(new fromStore.LoadCategories());
  }

  addCategory() {
    console.log("now");
  }
}
