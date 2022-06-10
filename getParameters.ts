export type getParameters<Func extends Function> = Func extends (...args: infer Args) => unknown ? Args : never;

let a: getParameters<(name: string, age: number) => unknown>;
