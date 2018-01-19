import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";

import { DATA } from "./mock.data";

import { Institution } from "../../models/institution.model";

@Component({
  selector: "lnk-institutions",
  templateUrl: "./institutions.component.html",
  styleUrls: ["./institutions.component.scss"]
})
export class InstitutionsComponent implements OnInit {
  institutions$: Observable<Institution[]>;

  constructor(private store: Store<fromStore.InstitutionsState>) {}

  ngOnInit() {
    this.institutions$ = this.store.select(fromStore.getAllInstitutions);
    this.store.dispatch(new fromStore.LoadInstitutions());
  }
}
