import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { Institution, Category } from "../../../@shared/models";
import { InstitutionsSandbox } from "../../institutions.sandbox";

@Component({
  selector: "lnk-institution-item",
  templateUrl: "./institution-item.component.html",
  styleUrls: ["./institution-item.component.scss"]
})
export class InstitutionItemComponent implements OnInit {
  institution$: Observable<Institution>;
  availableCategories$: Observable<Category[]>;

  constructor(private sb: InstitutionsSandbox) {}

  ngOnInit() {
    this.availableCategories$ = this.sb.availableCategories$;
    this.institution$ = this.sb.selectedInstitution$;
  }

  create(institution: Institution) {
    this.sb.createInstitution(institution);
  }

  update(institution: Institution) {
    this.sb.updateInstitution(institution);
  }
}
