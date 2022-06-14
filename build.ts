export type build<
  length extends number,
  ele = any,
  result extends unknown[] = []
> = result["length"] extends length
  ? result
  : build<length, ele, [...result, ele]>;

type arr = build<10, '1'>;
