import test from 'ava'

import * as vcr from 'vcr-2d'

test('create', (t) => {
  t.deepEqual(vcr.create(10, 10), { x: 10, y: 10 })
})

test('add', (t) => {
  const vector = { x: 10, y: 10 }
  vcr.add(vector, 5)
  t.deepEqual(vector, { x: 15, y: 15 })
})

test('subtract', (t) => {
  const vector = { x: 10, y: 10 }
  vcr.subtract(vector, 5)
  t.deepEqual(vector, { x: 5, y: 5 })
})

test('divide', (t) => {
  const vector = { x: 15, y: 15 }
  vcr.divide(vector, 5)
  t.deepEqual(vector, { x: 3, y: 3 })
})

test('multiply', (t) => {
  const vector = { x: 10, y: 10 }
  vcr.multiply(vector, 5)
  t.deepEqual(vector, { x: 50, y: 50 })
})

test('floor', (t) => {
  const vector = { x: 10.456, y: 10.789 }
  vcr.floor(vector)
  t.deepEqual(vector, { x: 10, y: 10 })
})

test('ceil', (t) => {
  const vector = { x: 10.456, y: 10.789 }
  vcr.ceil(vector)
  t.deepEqual(vector, { x: 11, y: 11 })
})

test('clone', (t) => {
  const original = { x: 10, y: 10 }
  const clone = vcr.clone(original)
  t.deepEqual(original, clone)
  t.not(original, clone)
})

test('normalize', (t) => {
  const vector = { x: 1, y: 1 }
  vcr.normalize(vector)
  t.deepEqual(vector, { x: 0.7071067811865475, y: 0.7071067811865475 })
})

test('normalize - y === 0', (t) => {
  const vector = { x: 1, y: 0 }
  vcr.normalize(vector)
  t.deepEqual(vector, { x: 1, y: 0 })
})
