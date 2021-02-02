/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NonZeroBrand {
    readonly NonZero: unique symbol
}

/**
 * @since 0.0.1
 */
export const NonZero = t.brand(
    t.number,
    (n): n is t.Branded<number, NonZeroBrand> => 0 !== n,
    'NonZero'
)

/**
 * @since 0.0.1
 */
export type NonZero = t.TypeOf<typeof NonZero>
