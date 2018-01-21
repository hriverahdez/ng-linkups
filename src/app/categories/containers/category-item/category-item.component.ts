import { Component, OnInit } from "@angular/core";
import { Category } from "../../models/category.model";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";

@Component({
  selector: "lnk-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
  constructor(private store: Store<fromStore.CategoriesState>) {}

  ngOnInit() {}

  create(category: Category) {
    this.store.dispatch(new fromStore.AddCategory(category));
  }
}
