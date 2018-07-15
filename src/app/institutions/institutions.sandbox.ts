import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import { Store } from "@ngrx/store";

import * as fromRoot from "../@core/root-store";
import * as fromAuth from "../auth/store";
import * as fromStore from "./store";
import * as fromCategoriesFeature from "../categories/store";

import { Institution } from "../@shared/models";

@Injectable()
export class InstitutionsSandbox {
  showLineNumber$: Observable<boolean> = this.authStore$
    .select(fromAuth.selectUserSettings)
    .pipe(map(settings => settings.showLineNumber));

  institutions$: Observable<Institution[]> = this.instStore$.select(
    fromStore.getAllInstitutions
  );

  categoriesInUse$ = this.instStore$.select(fromStore.getInstitutionCategories);

  availableCategories$ = this.catgStore$.select(
    fromCategoriesFeature.getAllCategories
  );

  selectedInstitution$ = this.instStore$
    .select(fromStore.getSelectedInstitution)
    .pipe(tap((institution: Institution = null) => institution));

  constructor(
    private rootStore$: Store<fromRoot.AppState>,
    private authStore$: Store<fromAuth.AuthState>,
    private instStore$: Store<fromStore.InstitutionsState>,
    private catgStore$: Store<fromCategoriesFeature.CategoriesState>
  ) {}

  goToAddInstitutionPage() {
    this.rootStore$.dispatch(new fromRoot.Go({ path: ["/institutions/add"] }));
  }

  createInstitution(institution: Institution) {
    this.instStore$.dispatch(new fromStore.AddInstitution(institution));
  }

  updateInstitution(institution: Institution) {
    this.instStore$.dispatch(new fromStore.UpdateInstitution(institution));
  }

  deleteInstitution(institution: Institution) {
    this.instStore$.dispatch(new fromStore.DeleteInstitution(institution));
  }
}
