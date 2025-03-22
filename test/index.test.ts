import { test, expect } from 'vitest'

import * as vcr from '../src/index.js'

test('create', () => {
  expect(vcr.create(10, 10)).toEqual({ x: 10, y: 10 })
})

test('add', () => {
  const vector = { x: 10, y: 10 }
  vcr.add(vector, 5)
  expect(vector).toEqual({ x: 15, y: 15 })
})

test('subtract', () => {
  const vector = { x: 10, y: 10 }
  vcr.subtract(vector, 5)
  expect(vector).toEqual({ x: 5, y: 5 })
})

test('divide', () => {
  const vector = { x: 15, y: 15 }
  vcr.divide(vector, 5)
  expect(vector).toEqual({ x: 3, y: 3 })
})

test('multiply', () => {
  const vector = { x: 10, y: 10 }
  vcr.multiply(vector, 5)
  expect(vector).toEqual({ x: 50, y: 50 })
})

test('floor', () => {
  const vector = { x: 10.456, y: 10.789 }
  vcr.floor(vector)
  expect(vector).toEqual({ x: 10, y: 10 })
})

test('ceil', () => {
  const vector = { x: 10.456, y: 10.789 }
  vcr.ceil(vector)
  expect(vector).toEqual({ x: 11, y: 11 })
})

test('round', () => {
  const vector = { x: 10.456, y: 10.789 }
  vcr.round(vector)
  expect(vector).toEqual({ x: 10, y: 11 })
})

test('clone', () => {
  const original = { x: 10, y: 10 }
  const clone = vcr.clone(original)
  expect(original).to.not.equal(clone)
})

test('normalize', () => {
  const vector = { x: 1, y: 1 }
  vcr.normalize(vector)
  expect(vector).toEqual({ x: 0.7071067811865475, y: 0.7071067811865475 })
})

test('normalize - y === 0', () => {
  const vector = { x: 1, y: 0 }
  vcr.normalize(vector)
  expect(vector).toEqual({ x: 1, y: 0 })
})

test('normalize - 0 0', () => {
  const vector = { x: 0, y: 0 }
  vcr.normalize(vector)
  expect(vector).toEqual({ x: 0, y: 0 })
})

test('dot - 0', () => {
  const vector1 = { x: 0, y: 0 }
  const vector2 = { x: 0, y: 1 }

  const result = vcr.dot(vector1, vector2)
  expect(result).toEqual(0)
})

test('dot - -1', () => {
  const vector1 = { x: 1, y: 1 }
  vcr.normalize(vector1)
  const vector2 = { x: -1, y: -1 }
  vcr.normalize(vector2)

  const result = vcr.dot(vector1, vector2)
  expect(result).toBeCloseTo(-1)
})

test('dot - 1', () => {
  const vector1 = { x: 1, y: 1 }
  vcr.normalize(vector1)
  const vector2 = { x: 1, y: 1 }
  vcr.normalize(vector2)

  const result = vcr.dot(vector1, vector2)
  expect(result).toBeCloseTo(1)
})
