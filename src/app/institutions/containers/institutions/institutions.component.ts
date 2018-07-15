import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import * as fromRoot from "../../../@core/root-store";
import * as fromStore from "../../store";

import * as fromComponents from "../../components";
import { Institution, Category, UserSettings } from "../../../@shared/models";
import { DialogService } from "../../../@shared/utility/dialog.service";
import { InstitutionsSandbox } from "../../institutions.sandbox";

@Component({
  selector: "lnk-institutions",
  templateUrl: "./institutions.component.html",
  styleUrls: ["./institutions.component.scss"]
})
export class InstitutionsComponent implements OnInit {
  institutions$: Observable<Institution[]>;
  categoriesInUse$: Observable<Category[]>;

  showLineNumber$: Observable<boolean>;

  constructor(
    private sb: InstitutionsSandbox,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.showLineNumber$ = this.sb.showLineNumber$;
    this.institutions$ = this.sb.institutions$;
    this.categoriesInUse$ = this.sb.categoriesInUse$;
  }

  goToAddInstitutionPage() {
    this.sb.goToAddInstitutionPage();
  }

  delete(institution: Institution) {
    this.sb.deleteInstitution(institution);
  }
}
