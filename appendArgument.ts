export type appendArgument<
  Func extends Function,
  arg extends any
> = Func extends (...args: infer Args) => infer returnType
  ? (...args: [...Args, arg]) => returnType
  : never;
