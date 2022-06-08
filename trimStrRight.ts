export type trimStrRight<str extends  string> = str extends `${infer elements}${' ' | '\n' | '\r'}`
? trimStrRight<elements>
: str;
