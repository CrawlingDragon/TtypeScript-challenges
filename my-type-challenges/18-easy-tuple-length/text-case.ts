import type { Equal, Expect } from '@type-challenges/utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT',
] as const;

type cases = [
  Expect<Equal<Length2<typeof tesla>, 4>>,
  Expect<Equal<Length2<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length2<5>,
  // @ts-expect-error
  Length2<'hello world'>
];
