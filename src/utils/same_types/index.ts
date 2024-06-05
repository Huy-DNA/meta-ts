import { TypeCheckSuccess } from "../../core";

export type SameType<T, S> = T extends S ? (S extends T ? TypeCheckSuccess : never) : never;
