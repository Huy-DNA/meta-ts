export class TypeCheckSuccess {};
export class TypeCheckFail {};

export function checkAll<T extends TypeCheckSuccess[]>() {};
export function check<T extends TypeCheckSuccess>() {};
