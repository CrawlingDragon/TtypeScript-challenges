import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Concat2<[], []>, []>>,
  Expect<Equal<Concat2<[], [1]>, [1]>>,
  Expect<Equal<Concat2<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat2<['1', 2, '3'], [false, boolean, '4']>,
      ['1', 2, '3', false, boolean, '4']
    >
  >
];
