/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { Zero } from './Zero'
import { Positive } from './Positive'

/**
 * @since 0.0.1
 */
export const NonNegative = t.union([Zero, Positive])

/**
 * @since 0.0.1
 */
export type NonNegative = t.TypeOf<typeof NonNegative>
