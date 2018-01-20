import { Component, OnInit } from "@angular/core";
import { Category } from "../../models/category.model";

@Component({
  selector: "lnk-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  create(category: Category) {
    console.log(category);
  }
}
