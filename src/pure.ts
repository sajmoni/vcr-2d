// Immutable pure functions

export type Vector = {
  x: number
  y: number
}

export const create = (x: number, y: number): Vector => {
  return { x, y }
}

export const add = (vector: Vector, value: number): Vector => ({
  x: vector.x + value,
  y: vector.y + value,
})

export const subtract = (vector: Vector, value: number): Vector => ({
  x: vector.x - value,
  y: vector.y - value,
})

export const divide = (vector: Vector, value: number): Vector => ({
  x: vector.x / value,
  y: vector.y / value,
})

export const multiply = (vector: Vector, value: number): Vector => ({
  x: vector.x * value,
  y: vector.y * value,
})

export const floor = (vector: Vector): Vector => ({
  x: Math.floor(vector.x),
  y: Math.floor(vector.y),
})

export const ceil = (vector: Vector): Vector => ({
  x: Math.ceil(vector.x),
  y: Math.ceil(vector.y),
})

export const round = (vector: Vector): Vector => ({
  x: Math.round(vector.x),
  y: Math.round(vector.y),
})

export const normalize = ({ x, y }: Vector): Vector => {
  const magnitude = Math.sqrt(x ** 2 + y ** 2)
  if (magnitude === 0) {
    return { x: 0, y: 0 }
  }

  return {
    x: x / magnitude,
    y: y / magnitude,
  }
}

export const clone = (vector: Vector): Vector => ({ x: vector.x, y: vector.y })
