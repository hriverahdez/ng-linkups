import { Action } from "@ngrx/store";

import { Category } from "../../models/category.model";

// LOAD
export const LOAD_CATEGORIES = "[Categories] Load Categories";
export const LOAD_CATEGORIES_FAIL = "[Categories] Load Categories Fail";
export const LOAD_CATEGORIES_SUCCESS = "[Categories] Load Categories Success";

export class LoadCategories implements Action {
  readonly type = LOAD_CATEGORIES;
}

export class LoadCategoriesFail implements Action {
  readonly type = LOAD_CATEGORIES_FAIL;
  constructor(public payload: any) {}
}

export class LoadCategoriesSuccess implements Action {
  readonly type = LOAD_CATEGORIES_SUCCESS;
  constructor(public payload: Category[]) {}
}

// ADD
export const ADD_CATEGORY = "[Category] Add Category";
export const ADD_CATEGORY_FAIL = "[Category] Add Category Fail";
export const ADD_CATEGORY_SUCCESS = "[Category] Add Category Success";

export class AddCategory implements Action {
  readonly type = ADD_CATEGORY;
  constructor(public payload: Category) {}
}

export class AddCategoryFail implements Action {
  readonly type = ADD_CATEGORY_FAIL;
  constructor(public payload: any) {}
}

export class AddCategorySuccess implements Action {
  readonly type = ADD_CATEGORY_SUCCESS;
  constructor(public payload: Category) {}
}

// UPDATE
export const UPDATE_CATEGORY = "[Category] Update Category";
export const UPDATE_CATEGORY_FAIL = "[Category] Update Category Fail";
export const UPDATE_CATEGORY_SUCCESS = "[Category] Update Category Success";

export class UpdateCategory implements Action {
  readonly type = UPDATE_CATEGORY;
  constructor(public payload: Category) {}
}

export class UpdateCategoryFail implements Action {
  readonly type = UPDATE_CATEGORY_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCategorySuccess implements Action {
  readonly type = UPDATE_CATEGORY_SUCCESS;
  constructor(public payload: Category) {}
}

// DELETE
export const DELETE_CATEGORY = "[Category] Delete Category";
export const DELETE_CATEGORY_FAIL = "[Category] Delete Category Fail";
export const DELETE_CATEGORY_SUCCESS = "[Category] Delete Category Success";

export class DeleteCategory implements Action {
  readonly type = DELETE_CATEGORY;
  constructor(public payload: Category) {}
}

export class DeleteCategoryFail implements Action {
  readonly type = DELETE_CATEGORY_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCategorySuccess implements Action {
  readonly type = DELETE_CATEGORY_SUCCESS;
  constructor(public payload: Category) {}
}

export type CategoryActions =
  | LoadCategories
  | LoadCategoriesFail
  | LoadCategoriesSuccess
  | AddCategory
  | AddCategoryFail
  | AddCategorySuccess
  | UpdateCategory
  | UpdateCategoryFail
  | UpdateCategorySuccess
  | DeleteCategory
  | DeleteCategoryFail
  | DeleteCategorySuccess;
