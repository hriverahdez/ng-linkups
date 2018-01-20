import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lnk-add-new-button",
  templateUrl: "./add-new-button.component.html",
  styleUrls: ["./add-new-button.component.scss"]
})
export class AddNewButtonComponent implements OnInit {
  @Input() text;
  @Input() icon;

  @Output() clicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.clicked.emit(true);
  }
}
