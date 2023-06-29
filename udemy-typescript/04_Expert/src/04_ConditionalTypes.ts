/**
 * Exclude null and undefinded from T (by mapping it to never)
 */

export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;
// is the same as
type ExpandExample = NoEmpty<string> | NoEmpty<null>;
type ExpandedFurther =
    (string extends null | undefined ? never : string)
    | (null extends null | undefined ? never : string)
type ExpandedFurther2 =
    string
    | never;

type Example2 = NoEmpty<null>;
