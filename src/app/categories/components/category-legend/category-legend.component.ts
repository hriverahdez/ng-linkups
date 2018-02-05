import { Component, OnInit, Input } from "@angular/core";

import { Category } from "../../models/category.model";

@Component({
  selector: "lnk-category-legend",
  templateUrl: "./category-legend.component.html",
  styleUrls: ["./category-legend.component.scss"]
})
export class CategoryLegendComponent implements OnInit {
  @Input() categories: Category[];
  constructor() {}

  ngOnInit() {}
}
