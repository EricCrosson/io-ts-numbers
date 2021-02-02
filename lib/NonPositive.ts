/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NonPositiveBrand {
    readonly NonPositive: unique symbol
}

/**
 * @since 0.0.1
 */
export const NonPositive = t.brand(
    t.number,
    (n): n is t.Branded<number, NonPositiveBrand> => n <= 0,
    'NonPositive'
)

/**
 * @since 0.0.1
 */
export type NonPositive = t.TypeOf<typeof NonPositive>
