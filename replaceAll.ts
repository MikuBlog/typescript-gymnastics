export type replaceAll<
  T extends string,
  from extends string,
  to extends string
> = T extends `${infer prefix}${from}${infer suffix}`
  ? `${prefix}${to}${replaceAll<suffix, from, to>}`
  : T;

type str = replaceAll<'111112222223333', '1', 'a'>;
