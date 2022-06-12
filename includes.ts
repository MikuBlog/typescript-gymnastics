export type includes<T extends unknown[], K extends any> = T extends [
  infer first,
  ...infer rest
]
  ? first extends K
    ? true
    : includes<rest, K>
  : false;

type hasEles = includes<[1, 2, 3, 4, 5], 6>;
