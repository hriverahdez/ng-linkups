import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lnk-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  addCategory() {
    console.log("now");
  }
}