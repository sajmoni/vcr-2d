import test from 'ava'

import * as vcr from 'vcr'

test('create', (t) => {
  t.deepEqual(vcr.create(10, 10), { x: 10, y: 10 })
})

test('add', (t) => {
  t.deepEqual(vcr.add({ x: 10, y: 10 }, 5), { x: 15, y: 15 })
})

test('subtract', (t) => {
  t.deepEqual(vcr.subtract({ x: 10, y: 10 }, 5), { x: 5, y: 5 })
})

test('divide', (t) => {
  t.deepEqual(vcr.divide({ x: 15, y: 15 }, 5), { x: 3, y: 3 })
})

test('multiply', (t) => {
  t.deepEqual(vcr.multiply({ x: 10, y: 10 }, 5), { x: 50, y: 50 })
})

test('floor', (t) => {
  t.deepEqual(vcr.floor({ x: 10.456, y: 10.789 }), { x: 10, y: 10 })
})

test('ceil', (t) => {
  t.deepEqual(vcr.ceil({ x: 10.456, y: 10.789 }), { x: 11, y: 11 })
})

test.todo('normalize')
