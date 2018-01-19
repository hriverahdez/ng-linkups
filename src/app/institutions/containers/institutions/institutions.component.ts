import { Component, OnInit } from "@angular/core";

import { DATA } from "./mock.data";

@Component({
  selector: "lnk-institutions",
  templateUrl: "./institutions.component.html",
  styleUrls: ["./institutions.component.scss"]
})
export class InstitutionsComponent implements OnInit {
  institutions = DATA;

  constructor() {}

  ngOnInit() {}
}
