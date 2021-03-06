import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Institution } from "../../../@shared/models";

@Component({
  selector: "lnk-institution-detail",
  templateUrl: "./institution-detail.component.html",
  styleUrls: ["./institution-detail.component.scss"]
})
export class InstitutionDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<InstitutionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Institution
  ) {}

  customDateFormat = "d MMM y, h:m a";

  ngOnInit() {}
}
