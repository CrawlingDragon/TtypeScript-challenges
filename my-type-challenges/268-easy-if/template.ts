type If2<C extends boolean, T, F> = C extends true ? T : F;
// null 在严格模式下是 true ，在非严格模式下，是false
