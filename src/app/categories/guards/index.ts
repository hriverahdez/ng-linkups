import { CategoriesGuard } from "./categories.guard";
import { CategoryExistsGuard } from "./category-exists.guard";

export const guards: any[] = [CategoriesGuard, CategoryExistsGuard];

export * from "./categories.guard";
export * from "./category-exists.guard";
