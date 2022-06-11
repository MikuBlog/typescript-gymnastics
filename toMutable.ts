export type toMutable<T> = {
  -readonly [key in keyof T]: T[key];
};