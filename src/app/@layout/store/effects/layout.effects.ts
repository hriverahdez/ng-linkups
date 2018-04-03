import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  RoutesRecognized
} from "@angular/router";

import * as fromStore from "../reducers/layout.reducers";
import * as fromLayout from "../actions/layout.actions";
import { map, switchMap, concatMap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

@Injectable()
export class LayoutEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store<fromStore.State>
  ) {}

  @Effect({ dispatch: false })
  showProgress$ = this.router.events.pipe(
    map(event => {
      // console.log(event);
      if (event instanceof NavigationStart) {
        // return of(new fromLayout.DisplayProgressBar());
        this.store.dispatch(new fromLayout.ShowLoader());
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.store.dispatch(new fromLayout.HideLoader());
      }
    })
  );
}
