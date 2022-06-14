export type strLen<
  T extends string,
  result extends unknown[] = []
> = T extends `${string}${infer rest}`
  ? strLen<rest, [unknown, ...result]>
  : result["length"];

type test = strLen<'123123123'>;
