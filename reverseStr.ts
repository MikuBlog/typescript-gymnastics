export type reverseStr<
  T extends string,
  result extends string = ""
> = T extends `${infer first}${infer rest}`
  ? reverseStr<rest, `${first}${result}`>
  : result;

type reverseStrS = reverseStr<'123'>;
