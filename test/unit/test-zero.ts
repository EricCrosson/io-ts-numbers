import test from 'ava'
import { includes, excludes } from '../assert'

/**
 * Unit under test
 */
import { Zero } from '../../lib/Zero'

test('includes zero', includes, Zero, 0)
test('excludes one', excludes, Zero, 1)
test('excludes negative one', excludes, Zero, -1)
