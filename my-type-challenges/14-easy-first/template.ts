//type First2<T extends any[]> = T[0] extends T[number] ? T[0] : never;
// union
//extends

//type First2<T extends any[]> = T extends [infer First, ...infer rest] ? First : never;
//infer 类似于js的数组解构

type First2<T extends any[]> = T['length'] extends 0 ? never : T[0];
// arr["length"] 属性，相当于js的[].length
// extends 类型约束，也可以约等于 == 或者 ===

//js

const first = (arr) => {
  // arr 是不是一个空数组，是的话，返回never
  const [first, ...rest] = arr;
  return first ? first : 'never';
};

// 知识点
// 1.extends 类型条件判断
// 2.获取tuple的length属性 indexed
// 3.extends union 判断的规则
// 4.infer的使用（推断）
