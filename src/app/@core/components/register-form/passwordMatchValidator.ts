import {
  AbstractControl,
  ValidatorFn,
  FormGroup,
  ValidationErrors,
  FormControl
} from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators";

export const passwordMatcher = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    const password = control.get("password");
    const passwordConfirm = control.get("passwordConfirm");
    if (!password || !passwordConfirm) {
      console.log("asdasdas");
      return null;
    }
    return password.value === passwordConfirm.value ? null : { nomatch: true };
  };
};
