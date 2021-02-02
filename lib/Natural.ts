/**
 * @since 0.0.1
 */

import * as t from 'io-ts'
import { Positive } from './Positive'
import { Finite } from './Finite'

/**
 * @since 0.0.1
 */
export const Natural = t.intersection([t.Int, Positive, Finite])

/**
 * @since 0.0.1
 */
export type Natural = t.TypeOf<typeof Natural>
