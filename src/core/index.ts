export class TypeCheckSuccess {};

export type checkAll<T extends TypeCheckSuccess[]> = null;
export type check<T extends TypeCheckSuccess> = null;
