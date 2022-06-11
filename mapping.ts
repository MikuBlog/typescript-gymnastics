export type mapping<obj extends object> = {
  [key in keyof obj]: [obj[key], obj[key], obj[key]];
};

type a = mapping<{a: 1, b: 2}>;
