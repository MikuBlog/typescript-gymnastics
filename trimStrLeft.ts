export type trimStrLeft<str extends string> = str extends `${' ' | '\n' | '\r'}${infer elements}`
? trimStrLeft<elements>
: str;