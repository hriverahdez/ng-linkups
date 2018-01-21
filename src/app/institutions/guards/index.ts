import { InstitutionsGuard } from "./institutions.guard";
import { InstitutionExistsGuard } from "./institution-exists.guard";

export const guards: any[] = [InstitutionsGuard, InstitutionExistsGuard];

export * from "./institutions.guard";
export * from "./institution-exists.guard";
