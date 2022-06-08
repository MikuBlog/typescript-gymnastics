export type pop<arr extends unknown[]> = arr extends [...infer elements, unknown]
  ? elements
  : never;