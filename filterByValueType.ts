// 如果原来索引的值 Obj[Key] 是 ValueType 类型，索引依然为之前的索引 Key，否则索引设置为 never，never 的索引会在生成新的索引类型时被去掉。
export type filterByValueType<T, valueType> = {
  [key in keyof T as valueType extends T[key] ? key : never]: T[key];
};

interface person {
  name: string;
  age: number;
  action: unknown[];
}

type a = filterByValueType<person, string | number>;
