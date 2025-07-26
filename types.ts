/**
 * Creates a union type of numbers from 0 to N (inclusive)
 * This is a generic and declarative approach to create bounded number types
 */
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * Creates a range type from F to T (inclusive)
 */
export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> | T;
