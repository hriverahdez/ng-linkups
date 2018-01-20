import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import { Institution } from "../../models/institution.model";
import * as fromStore from "../../store";

@Component({
  selector: "lnk-institution-item",
  templateUrl: "./institution-item.component.html",
  styleUrls: ["./institution-item.component.scss"]
})
export class InstitutionItemComponent implements OnInit {
  constructor(private store: Store<fromStore.InstitutionsState>) {}

  ngOnInit() {}

  create(institution: Institution) {
    this.store.dispatch(new fromStore.AddInstitution(institution));
  }
}
