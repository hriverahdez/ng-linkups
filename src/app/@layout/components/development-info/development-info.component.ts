import { Component, OnInit } from "@angular/core";
import { TECHS } from "./techs";

@Component({
  selector: "lnk-development-info",
  templateUrl: "./development-info.component.html",
  styleUrls: ["./development-info.component.scss"]
})
export class DevelopmentInfoComponent implements OnInit {
  techs = TECHS;

  constructor() {}

  ngOnInit() {}
}
