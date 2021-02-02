/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NonNegativeBrand {
    readonly NonNegative: unique symbol
}

/**
 * @since 0.0.1
 */
export const NonNegative = t.brand(
    t.number,
    (n): n is t.Branded<number, NonNegativeBrand> => 0 <= n,
    'NonNegative'
)

/**
 * @since 0.0.1
 */
export type NonNegative = t.TypeOf<typeof NonNegative>
