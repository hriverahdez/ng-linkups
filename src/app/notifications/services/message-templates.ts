import * as fromInstitutions from "../../institutions/store/actions";
import * as fromSubnets from "../../subnets/store/actions";
import * as fromCategories from "../../categories/store/actions";

export const TEMPLATES = {
  [fromInstitutions.ADD_INSTITUTION_SUCCESS]: "Agregada Institución",
  [fromInstitutions.UPDATE_INSTITUTION_SUCCESS]: "Actualizada institución",
  [fromInstitutions.DELETE_INSTITUTION_SUCCESS]: "Elminada institución",

  [fromCategories.ADD_CATEGORY_SUCCESS]: "Agregada Categoría",
  [fromCategories.UPDATE_CATEGORY_SUCCESS]: "Actualizada Categoría",
  [fromCategories.DELETE_CATEGORY_SUCCESS]: "Eliminada Categoría",

  [fromSubnets.ADD_SUBNET_SUCCESS]: "Agregada Subred",
  [fromSubnets.UPDATE_SUBNET_SUCCESS]: "Actualizada Subred",
  [fromSubnets.DELETE_SUBNET_SUCCESS]: "Eliminada Subred",
  [fromSubnets.ADD_SUBNET_RANGE_SUCCESS]: "Agregado rango de"
};
