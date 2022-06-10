type push<Arr extends unknown[], ele extends any> = [...Arr, ele]; 

let c: push<[1, 2, 3], 4>;
