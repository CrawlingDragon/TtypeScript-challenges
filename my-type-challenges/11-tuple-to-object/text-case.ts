import type { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
// as const 代表是字面量对象，也就是常量，是不可更改的,和 js定义这个tuple 是符合的

type cases = [
  Expect<
    Equal<
      TupleToObject2<typeof tuple>,
      //typeof 相当于把一个js的内容，转换成 ts的内容
      // 也就是说想把js的东西 参与到ts中，就必须转换成ts的东西，这里的typeof 就是一种
      { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
    >
  >
];

// @ts-expect-error
type error = TupleToObject2<[[1, 2], {}]>;

// 上方的 @ts-expect-error 是ts的注释断言， 希望下面的ts报错，如果注释本身报错，说明不通过
