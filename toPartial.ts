export type toPartial<T> = {
  [key in keyof T]?: T[key];
};

type obj = toPartial<{a: 1, b: 2}>;
