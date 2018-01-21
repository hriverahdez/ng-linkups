import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Category } from "../../models/category.model";

@Component({
  selector: "lnk-category",
  templateUrl: "./category-detail.component.html",
  styleUrls: ["./category-detail.component.scss"]
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: Category;

  @Output() onUpdateRequest = new EventEmitter<Category>();
  @Output() onDeleteRequest = new EventEmitter<Category>();

  constructor() {}

  ngOnInit() {}

  requestUpdate() {
    this.onUpdateRequest.emit(this.category);
  }

  requestDelete() {
    this.onDeleteRequest.emit(this.category);
  }
}
