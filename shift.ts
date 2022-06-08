export type shift<arr extends unknown[]> = arr extends [unknown, ...infer elements]
  ? elements
  : never;
