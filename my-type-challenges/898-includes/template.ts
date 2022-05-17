import type { Equal } from '@type-challenges/utils';
export type Includes2<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes2<Rest, U>
  : false;

function Incl(T, key) {
  function _(T, key) {
    if (T.length == 0) {
      return false;
    }
    const [first, ...rest] = T;

    if (first === T) {
      return true;
    } else {
      _(rest, key);
    }
  }

  return _(T, key);
}
