export type greaterThan<
  num1 extends number,
  num2 extends number,
  storage extends unknown[] = []
> = num1 extends num2
  ? false
  : num2 extends storage["length"]
  ? true
  : num1 extends storage["length"]
  ? false
  : greaterThan<num1, num2, [unknown, ...storage]>;

type test = greaterThan<1, 2>;
