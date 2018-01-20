import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Category } from "../../models/category.model";

@Component({
  selector: "lnk-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  @Input() category: Category;

  constructor() {}

  ngOnInit() {}
}
