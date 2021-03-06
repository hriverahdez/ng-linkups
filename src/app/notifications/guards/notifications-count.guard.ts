// import { Injectable } from "@angular/core";
// import { CanActivate } from "@angular/router";

// import { Store } from "@ngrx/store";
// import * as fromStore from "../store";

// import { Observable, of } from "rxjs";
// import { tap, map, switchMap, filter, take, catchError } from "rxjs/operators";

// @Injectable()
// export class NotificationsCountGuard implements CanActivate {
//   constructor(private store: Store<fromStore.NotificationsState>) {}

//   canActivate(): Observable<boolean> {
//     return this.checkStore().pipe(
//       switchMap(() => of(true)),
//       catchError(() => of(false))
//     );
//   }

//   checkStore(): Observable<boolean> {
//     return this.store.select(fromStore.getUnreadNotificationsCountLoaded).pipe(
//       tap(loaded => {
//         if (!loaded) {
//           this.store.dispatch(new fromStore.GetUnreadCount());
//         }
//       }),
//       filter(loaded => loaded),
//       take(1)
//     );
//   }
// }
