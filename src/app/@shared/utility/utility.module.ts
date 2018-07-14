import { NgModule, ModuleWithProviders } from "@angular/core";
import { ValidationService } from "./validation.service";
import { NotificationHelperService } from "./notification-helper.service";
import { IpHelperService } from "./ip-helper.service";
import { SnackBarService } from "./snack-bar.service";
import { DialogService } from "./dialog.service";

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,

      providers: [
        DialogService,
        IpHelperService,
        NotificationHelperService,
        SnackBarService,
        ValidationService
      ]
    };
  }
}
