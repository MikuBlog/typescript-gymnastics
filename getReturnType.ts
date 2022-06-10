// 这里只能用any，用于赋值给别的类型；unknown用于接收类型，如果用unknown则无法识别出返回类型
export type getReturnType<Func extends Function> = Func extends (...args: any[]) => infer returnType ? returnType : never;

let b: getReturnType<(name: string, age: number) => number>;
