export type toRequire<T> = {
  [key in keyof T]-?: T[key];
}