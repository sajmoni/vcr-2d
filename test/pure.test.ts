import { test, expect } from 'vitest'

import * as vcrPure from '../src/pure.js'

test('create - pure', () => {
  expect(vcrPure.create(10, 10)).toEqual({ x: 10, y: 10 })
})

test('add - pure', () => {
  expect(vcrPure.add({ x: 10, y: 10 }, 5)).toEqual({ x: 15, y: 15 })
})

test('subtract - pure', () => {
  expect(vcrPure.subtract({ x: 10, y: 10 }, 5)).toEqual({ x: 5, y: 5 })
})

test('divide - pure', () => {
  expect(vcrPure.divide({ x: 15, y: 15 }, 5)).toEqual({ x: 3, y: 3 })
})

test('multiply - pure', () => {
  expect(vcrPure.multiply({ x: 10, y: 10 }, 5)).toEqual({ x: 50, y: 50 })
})

test('floor - pure', () => {
  expect(vcrPure.floor({ x: 10.456, y: 10.789 })).toEqual({ x: 10, y: 10 })
})

test('ceil - pure', () => {
  expect(vcrPure.ceil({ x: 10.456, y: 10.789 })).toEqual({ x: 11, y: 11 })
})

test('round - pure', () => {
  expect(vcrPure.round({ x: 10.456, y: 10.789 })).toEqual({ x: 10, y: 11 })
})

test('clone - pure', () => {
  const original = { x: 10, y: 10 }
  const clone = vcrPure.clone(original)
  expect(original).to.not.equal(clone)
})

test('normalize - pure', () => {
  const vector = { x: 1, y: 1 }
  const result = vcrPure.normalize(vector)
  expect(result).toEqual({ x: 0.7071067811865475, y: 0.7071067811865475 })
})

test('normalize - pure - y === 0', () => {
  const vector = { x: 1, y: 0 }
  const result = vcrPure.normalize(vector)
  expect(result).toEqual({ x: 1, y: 0 })
})

test('normalize - pure - 0 0', () => {
  const vector = { x: 0, y: 0 }
  const result = vcrPure.normalize(vector)
  expect(result).toEqual({ x: 0, y: 0 })
})
