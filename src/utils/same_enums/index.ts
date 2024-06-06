import { SameType } from "../same_types";

type KeyValueFromEnum<T> = {
  [K in keyof T]: `${Extract<T[K], number>}` extends `${infer U extends number}` ? U : never;
};

// Check that two enum types are identical
// Remember to pass `typeof EnumObj` not `EnumObj` as type parameters
export type SameNumericalEnum<T, U> = SameType<KeyValueFromEnum<T>, KeyValueFromEnum<U>>;
