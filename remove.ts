export type remove<
  T extends unknown[],
  item extends any,
  result extends unknown[] = []
> = T extends [infer first, ...infer rest]
  ? first extends item
    ? remove<rest, item, result>
    : remove<rest, item, [...result, first]>
  : result;

type arr = remove<[1, 2, 3, 4, 5], 5>;
