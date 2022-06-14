export type deepReadonly<T extends object> = {
  readonly [key in keyof T]: T[key] extends object
    ? T[key] extends Function
      ? T[key]
      : deepReadonly<T[key]>
    : T[key];
};

type a = deepReadonly<{a: 1, b: { c: 'd', e: 'a' }}>['b'];
