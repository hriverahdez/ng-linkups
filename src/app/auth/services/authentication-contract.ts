import { Observable } from "rxjs";

export interface AuthenticationContract<T> {
  login: (user: T) => Observable<T>;
  register: (user: T) => Observable<T>;
  logout: () => Observable<T> | void;
}
