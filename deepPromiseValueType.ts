export type deepPromiseValueType<P extends Promise<unknown>> =
  P extends Promise<infer valueType>
    ? valueType extends Promise<unknown>
      ? deepPromiseValueType<valueType>
      : valueType
    : never;
