export type camelCase<str extends string> = str extends `${infer first}_${infer second}${infer others}`
? `${first}${Uppercase<second>}${camelCase<others>}`
: str;

let a: camelCase<'asd_asd_asd'>;
