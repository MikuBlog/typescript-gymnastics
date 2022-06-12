export type reverse<T extends unknown[]> = T extends [
  infer first,
  ...infer rest
]
  ? [...reverse<rest>, first]
  : T;

type arr = reverse<[1, 2, 3, 4, 5]>;
