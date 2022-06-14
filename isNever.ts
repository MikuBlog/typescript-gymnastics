export type isNever<T> = [T] extends [never] ? true : false;

type test = isNever<never>;

type test2 = [1, 2, 3];

type test3 = test2['length'];
