export type toReadOnly<T> = {
  readonly [key in keyof T]: T[key];
}