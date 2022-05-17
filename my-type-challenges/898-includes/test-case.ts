import type { Equal, Expect } from '@type-challenges/utils';
import { Includes2 } from './template';
type cases = [
  Expect<Equal<Includes2<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes2<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes2<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes2<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes2<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes2<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes2<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes2<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes2<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes2<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes2<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes2<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes2<[1], 1 | 2>, false>>,
  Expect<Equal<Includes2<[1 | 2], 1>, false>>,
  Expect<Equal<Includes2<[null], undefined>, false>>,
  Expect<Equal<Includes2<[undefined], null>, false>>
];
