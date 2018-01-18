import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lnk-dash-panel",
  templateUrl: "./dash-panel.component.html",
  styleUrls: ["./dash-panel.component.scss"]
})
export class DashPanelComponent implements OnInit {
  @Input() color: string;
  @Input() icon: string;
  @Input() title: string;
  @Input() value: string;
  @Input() unit: string;

  @Input() footerIcon: string;
  @Input() footerText: string;

  constructor() {}

  ngOnInit() {}
}
