/**
 * @since 0.0.1
 */

import { NumberFromString } from './NumberFromString'
import { NonPositive } from './NonPositive'

/**
 * @since 0.0.1
 */
export const NonPositiveFromString = NumberFromString.pipe(NonPositive)
