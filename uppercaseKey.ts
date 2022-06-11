// 通过 Uppercase 把索引 Key 转为大写，因为索引可能为 string、number、symbol 类型，而这里只能接受 string 类型，所以要 & string，也就是取索引中 string 的部分。
type uppercaseKey<obj extends Record<string, any>> = {
  [key in keyof obj as Uppercase<key & string>]: obj[key];
};

type obj = uppercaseKey<{asd: 1, vas: 2}>;
