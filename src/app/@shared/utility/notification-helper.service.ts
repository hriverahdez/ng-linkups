import { Injectable } from "@angular/core";

import { Action } from "@ngrx/store";
import * as fromInstitutions from "../../institutions/store/actions";
import * as fromSubnets from "../../subnets/store/actions";
import * as fromCategories from "../../categories/store/actions";

import { TEMPLATES } from "./message-templates";
import { Notification } from "../models/notification.model";
import { AuthenticationService } from "../../auth/services";

@Injectable()
export class NotificationHelperService {
  constructor(private authenticationService: AuthenticationService) {}

  private get baseNotification(): Notification {
    return {
      user: this.authenticationService.getCurrentUser().email,
      unread: true,
      time: Date.now()
    };
  }

  getNotificationForAction(
    action:
      | fromInstitutions.InstitutionActions
      | fromCategories.CategoryActions
      | fromSubnets.SubnetActions
  ): Notification {
    switch (action.type) {
      case fromInstitutions.ADD_INSTITUTION_SUCCESS:
      case fromCategories.ADD_CATEGORY_SUCCESS:
      case fromSubnets.ADD_SUBNET_SUCCESS:
      case fromSubnets.ADD_SUBNET_RANGE_SUCCESS:
      case fromSubnets.ADD_SUBNET_FROM_MODAL_SUCCESS: {
        return {
          ...this.baseNotification,
          icon: "add_box",
          message: this.createMessageFromAction(action)
        };
      }

      case fromInstitutions.UPDATE_INSTITUTION_SUCCESS:
      case fromCategories.UPDATE_CATEGORY_SUCCESS:
      case fromSubnets.UPDATE_SUBNET_SUCCESS: {
        return {
          ...this.baseNotification,
          icon: "edit",
          message: this.createMessageFromAction(action)
        };
      }

      case fromInstitutions.DELETE_INSTITUTION_SUCCESS:
      case fromCategories.DELETE_CATEGORY_SUCCESS:
      case fromSubnets.DELETE_SUBNET_SUCCESS: {
        return {
          ...this.baseNotification,
          icon: "delete",
          message: this.createMessageFromAction(action)
        };
      }
    }
  }

  private createMessageFromAction(
    action:
      | fromInstitutions.InstitutionActions
      | fromCategories.CategoryActions
      | fromSubnets.SubnetActions
  ) {
    switch (action.type) {
      case fromInstitutions.DELETE_INSTITUTION_SUCCESS:
      case fromInstitutions.UPDATE_INSTITUTION_SUCCESS:
      case fromInstitutions.ADD_INSTITUTION_SUCCESS: {
        return `${TEMPLATES[action.type]} ${action.payload.name}`;
      }

      case fromCategories.DELETE_CATEGORY_SUCCESS:
      case fromCategories.UPDATE_CATEGORY_SUCCESS:
      case fromCategories.ADD_CATEGORY_SUCCESS: {
        return `${TEMPLATES[action.type]} ${action.payload.name}`;
      }

      case fromSubnets.DELETE_SUBNET_SUCCESS:
      case fromSubnets.UPDATE_SUBNET_SUCCESS:
      case fromSubnets.ADD_SUBNET_FROM_MODAL_SUCCESS:
      case fromSubnets.ADD_SUBNET_SUCCESS: {
        return `${TEMPLATES[action.type]} ${action.payload.ip}/${
          action.payload.mask
        }`;
      }

      case fromSubnets.ADD_SUBNET_RANGE_SUCCESS: {
        const newRange = action.payload as any[];
        return `${TEMPLATES[action.type]} ${newRange.length} subredes`;
      }
    }
  }
}
