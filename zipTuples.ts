export type zipTuples<
  first extends unknown[],
  last extends unknown[]
> = first extends [infer firstEle, ...infer othersFirstEle]
  ? last extends [infer lastEle, ...infer othersLastEle]
    ? [[firstEle, lastEle], ...zipTuples<othersFirstEle, othersLastEle>]
    : []
  : [];

type tuples_1 = [1, 2, 3, 4, 5];
type tuples_2 = ['1', '2', '3', '4', '5'];

let mergeTuples: zipTuples<tuples_1, tuples_2>;
