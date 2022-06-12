export type stringToUnion<T extends string> =
  T extends `${infer first}${infer rest}` ? first | stringToUnion<rest> : never;

type str = stringToUnion<'123'>;
