import { Vector } from './pure'

export const add = (vector: Vector, value: number | Vector): void => {
  if (typeof value === 'number') {
    vector.x += value
    vector.y += value
  } else {
    vector.x += value.x
    vector.y += value.y
  }
}

export const subtract = (vector: Vector, value: number | Vector): void => {
  if (typeof value === 'number') {
    vector.x -= value
    vector.y -= value
  } else {
    vector.x -= value.x
    vector.y -= value.y
  }
}

export const divide = (vector: Vector, value: number | Vector): void => {
  if (typeof value === 'number') {
    vector.x /= value
    vector.y /= value
  } else {
    vector.x /= value.x
    vector.y /= value.y
  }
}

export const multiply = (vector: Vector, value: number | Vector): void => {
  if (typeof value === 'number') {
    vector.x *= value
    vector.y *= value
  } else {
    vector.x *= value.x
    vector.y *= value.y
  }
}

export const floor = (vector: Vector): void => {
  vector.x = Math.floor(vector.x)
  vector.y = Math.floor(vector.y)
}

export const ceil = (vector: Vector): void => {
  vector.x = Math.ceil(vector.x)
  vector.y = Math.ceil(vector.y)
}

export const round = (vector: Vector): void => {
  vector.x = Math.round(vector.x)
  vector.y = Math.round(vector.y)
}

export const normalize = (vector: Vector): void => {
  const magnitude = Math.sqrt(vector.x ** 2 + vector.y ** 2)
  if (magnitude === 0) {
    vector.x = 0
    vector.y = 0
  } else {
    vector.x /= magnitude
    vector.y /= magnitude
  }
}

export { clone, create, type Vector } from './pure'
