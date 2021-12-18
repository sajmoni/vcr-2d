import test from 'ava'

import { sayHello } from 'vcr'

test('sayHello', (t) => {
  t.is(sayHello(), 'Hello world!')
})
