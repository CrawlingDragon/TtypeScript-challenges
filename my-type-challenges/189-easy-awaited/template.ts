type MyAwaited2<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited2<X>
    : X
  : never;
// infer 只能用在条件内，
// infer x 表示设置x 未知数
