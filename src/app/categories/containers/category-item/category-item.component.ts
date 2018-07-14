import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Category } from "../../models/category.model";

@Component({
  selector: "lnk-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
  category$: Observable<Category>;

  constructor(private store: Store<fromStore.CategoriesState>) {}

  ngOnInit() {
    this.category$ = this.store
      .select(fromStore.getSelectedCategory)
      .pipe(tap((category: Category = null) => category));
  }

  create(category: Category) {
    this.store.dispatch(new fromStore.AddCategory(category));
  }

  update(category: Category) {
    this.store.dispatch(new fromStore.UpdateCategory(category));
  }
}
