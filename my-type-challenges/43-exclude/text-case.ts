import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyExclude2<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<
    Equal<MyExclude2<'a' | 'b' | 'c', 'a' | 'b'>, Exclude<'a' | 'b' | 'c', 'a' | 'b'>>
  >,
  Expect<
    Equal<
      MyExclude2<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];
