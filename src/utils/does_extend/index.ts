import { TypeCheckSuccess } from "../../core";

export type DoesExtend<T, U> = T extends U ? TypeCheckSuccess : never;
