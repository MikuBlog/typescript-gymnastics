import { build } from "./build";

export type add<num1 extends number, num2 extends number> = [...build<num1>, ...build<num2>]['length'];

type test = add<1, 2>;
