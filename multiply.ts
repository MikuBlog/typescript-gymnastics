import { build } from "./build";
import { subtract } from "./subtract";

export type multiply<
  num1 extends number,
  num2 extends number,
  result extends unknown[] = []
> = num2 extends 0
  ? result["length"]
  : multiply<num1, subtract<num2, 1>, [...build<num1>, ...result]>;

type test = multiply<10, 10>;
