import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Category } from "../../models/category.model";

@Component({
  selector: "lnk-category",
  templateUrl: "./category-detail.component.html",
  styleUrls: ["./category-detail.component.scss"]
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: Category;

  constructor() {}

  ngOnInit() {}
}
