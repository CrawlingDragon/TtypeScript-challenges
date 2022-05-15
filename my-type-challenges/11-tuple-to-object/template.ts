// T[number] 表示循环数组
// (number|string|symbol)[] 表示对数组的元素进行约束，只能是number，或者string，或者symbol
type TupleToObject2<T extends readonly (number | string | symbol)[]> = {
  [p in T[number]]: p;
};

//js 实现
function tupleToObj(array) {
  let obj = {};
  array.forEach((val) => {
    if (typeof val == 'number' || typeof val == 'string' || typeof val == 'symbol') {
      obj[val] = val;
    }
  });
  return obj;
}
