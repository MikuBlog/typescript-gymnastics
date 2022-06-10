export type capitalizeStr<str extends string> = str extends `${infer first}${infer others}`
? `${Uppercase<first>}${others}`
: str;

let a: capitalizeStr<'asd'>;
