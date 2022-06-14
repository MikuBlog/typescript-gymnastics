export type isUnion<A, B = A> = A extends A
  ? [B] extends [A]
    ? false
    : true
  : never;

type test = isUnion<'a' | 'b' | 'c'>;
