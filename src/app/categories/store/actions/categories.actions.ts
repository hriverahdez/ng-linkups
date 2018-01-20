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

export type CategoryActions =
  | LoadCategories
  | LoadCategoriesFail
  | LoadCategoriesSuccess
  | AddCategory
  | AddCategoryFail
  | AddCategorySuccess;
