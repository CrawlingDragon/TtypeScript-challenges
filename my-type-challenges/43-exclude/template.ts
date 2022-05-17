// 知识点
// extends 在判断union 类型的时候，行为模式类似于循环数组
// never 表示空值
type MyExclude2<T, U> = T extends U ? never : T;

// function exclude(arr, arr2) {
//   let r = []
//   arr.forEach((val, index) => {
//    let boo = false
//    arr2.forEach(val2 => {
//      if (val === val2) {
//        boo = true
//      }
//    });
//     if (!boo) {
//       r.push(val)
//     }
//  });
//   return r
// }

// function exclude(T, U) {
//   let r = [];
//   T.forEach((val, index) => {
//     if (!U.includes(val)) {
//       r.push(val);
//     }
//   });
//   return r;
// }

// function exclude(T, U) {
//   return T.filter((item) => !U.includes(item));
// }
// exclude(['a', 'b', 'c'], ['a', 'b']);
