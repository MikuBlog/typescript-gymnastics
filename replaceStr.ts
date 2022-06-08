export type replaceStr<str extends string, From extends string, To extends string> = str extends `${infer prefix}${From}${infer suffix}`
? `${prefix}${To}${suffix}`
: str;