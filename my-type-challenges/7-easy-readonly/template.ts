type MyReadonly2<T> = {
  readonly [P in keyof T]: T[P];
};
