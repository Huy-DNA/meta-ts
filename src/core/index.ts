export class TypeCheckSuccess {};

export function checkAll<T extends TypeCheckSuccess[]>() {};
export function check<T extends TypeCheckSuccess>() {};
