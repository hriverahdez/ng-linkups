import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import * as fromStore from "../../store";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";

import { Institution } from "../../models/institution.model";

@Component({
  selector: "lnk-institution-item",
  templateUrl: "./institution-item.component.html",
  styleUrls: ["./institution-item.component.scss"]
})
export class InstitutionItemComponent implements OnInit {
  institution$: Observable<Institution>;
  constructor(private store: Store<fromStore.InstitutionsState>) {}

  ngOnInit() {
    this.institution$ = this.store
      .select(fromStore.getSelectedInstitution)
      .pipe(tap((institution: Institution = null) => institution));
  }

  create(institution: Institution) {
    this.store.dispatch(new fromStore.AddInstitution(institution));
  }

  update(institution: Institution) {
    this.store.dispatch(new fromStore.UpdateInstitution(institution));
  }
}
