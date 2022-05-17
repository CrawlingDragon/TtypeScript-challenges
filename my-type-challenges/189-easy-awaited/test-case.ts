import type { Equal, Expect } from '@type-challenges/utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type cases = [
  Expect<Equal<MyAwaited2<X>, string>>,
  Expect<Equal<MyAwaited2<Y>, { field: number }>>,
  Expect<Equal<MyAwaited2<Z>, string | number>>
];

// @ts-expect-error
type error = MyAwaited<number>;
