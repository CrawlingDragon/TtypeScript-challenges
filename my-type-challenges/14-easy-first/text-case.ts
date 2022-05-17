import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<First2<[3, 2, 1]>, 3>>,
  Expect<Equal<First2<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First2<[]>, never>>,
  Expect<Equal<First2<[undefined]>, undefined>>
];

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First2<arr1>; // expected to be 'a'
type head2 = First2<arr2>; // expected to be 3

type errors = [
  // @ts-expect-error
  First2<'notArray'>,
  // @ts-expect-error
  First2<{ 0: 'arrayLike' }>
];
