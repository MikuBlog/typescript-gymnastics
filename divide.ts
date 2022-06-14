import { build } from "./build";
import { subtract } from "./subtract";

export type divide<
  num1 extends number,
  num2 extends number,
  result extends unknown[] = []
> = num1 extends 0
  ? result["length"]
  : divide<subtract<num1, num2>, num2, [unknown, ...result]>;

type test = divide<10, 2>;
