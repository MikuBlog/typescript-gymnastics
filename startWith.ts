export type startWith<str extends string, prefix extends string> = str extends `${prefix}${string}` ? true : false;
