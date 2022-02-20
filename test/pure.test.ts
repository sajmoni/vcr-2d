import test from 'ava'

import * as vcrPure from 'vcr-2d/pure'

test('create - pure', (t) => {
  t.deepEqual(vcrPure.create(10, 10), { x: 10, y: 10 })
})

test('add - pure', (t) => {
  t.deepEqual(vcrPure.add({ x: 10, y: 10 }, 5), { x: 15, y: 15 })
})

test('subtract - pure', (t) => {
  t.deepEqual(vcrPure.subtract({ x: 10, y: 10 }, 5), { x: 5, y: 5 })
})

test('divide - pure', (t) => {
  t.deepEqual(vcrPure.divide({ x: 15, y: 15 }, 5), { x: 3, y: 3 })
})

test('multiply - pure', (t) => {
  t.deepEqual(vcrPure.multiply({ x: 10, y: 10 }, 5), { x: 50, y: 50 })
})

test('floor - pure', (t) => {
  t.deepEqual(vcrPure.floor({ x: 10.456, y: 10.789 }), { x: 10, y: 10 })
})

test('ceil - pure', (t) => {
  t.deepEqual(vcrPure.ceil({ x: 10.456, y: 10.789 }), { x: 11, y: 11 })
})

test('clone - pure', (t) => {
  const original = { x: 10, y: 10 }
  const clone = vcrPure.clone(original)
  t.deepEqual(original, clone)
  t.not(original, clone)
})

test('normalize - pure', (t) => {
  const vector = { x: 1, y: 1 }
  const result = vcrPure.normalize(vector)
  t.deepEqual(result, { x: 0.7071067811865475, y: 0.7071067811865475 })
})

test('normalize - pure - y === 0', (t) => {
  const vector = { x: 1, y: 0 }
  const result = vcrPure.normalize(vector)
  t.deepEqual(result, { x: 1, y: 0 })
})
