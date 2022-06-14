import { build } from "./build";

export type subtract<
  num1 extends number,
  num2 extends number
> = build<num1> extends [...build<num2>, ...infer rest]
  ? rest["length"]
  : never;

type test = subtract<10, 2>;
