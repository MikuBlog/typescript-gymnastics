export type dropSubStr<str extends string, subStr extends string> = str extends `${infer prefix}${subStr}${infer suffix}`
? dropSubStr<`${prefix}${suffix}`, subStr>
: str;

let a: dropSubStr<'12222223', '2'>;
