import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<If2<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If2<false, 'a', 2>, 2>>
];

// @ts-expect-error
type error = If2<null, 'a', 'b'>;
