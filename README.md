<h1 align="center">
  vcr
</h1>
<h4 align="center">
    2d vector functions
</h4>

<div align="center">
  <img src="https://badgen.net/npm/v/vcr?icon=npm" />
  <img src="https://badgen.net/bundlephobia/minzip/vcr" />
</div>

## :sparkles: Features <!-- omit in toc -->

- Uses TypeScript
- Immutable and mutable APIs
- Zero dependencies

---

- [:wrench: Example usage](#wrench-example-usage)
  - [Pure](#pure)
- [:package: Install](#package-install)
- [:newspaper: API](#newspaper-api)
  - [create](#create)
  - [add](#add)
  - [subtract](#subtract)
  - [divide](#divide)
  - [multiply](#multiply)
  - [floor](#floor)
  - [ceil](#ceil)
  - [normalize](#normalize)
  - [clone](#clone)

## :wrench: Example usage

```ts
import * as vcr from 'vcr'

const vector = vcr.create(10, 10)
console.log(vector)
// { x: 10, y: 10}

vcr.add(vector, 5)
// console.log(vector)
// { x: 15, y: 15 }
```

### Pure

```ts
import * as vcr from 'vcr/pure'

const vector = vcr.create(10, 10)
console.log(vector)
// { x: 10, y: 10}

const newVector = vcr.add(vector, 5)
console.log(newVector)
// { x: 15, y: 15 }

console.log(vector)
// { x: 10, y: 10 }
```

---

## :package: Install

**npm**

```
npm install vcr
```

**yarn**

```
yarn add vcr
```

---

## :newspaper: API

> Standard

```ts
import * as vcr from 'vcr'
```

> Pure

```ts
import * as vcr from 'vcr/pure'
```

### create

```ts
vcr.create({ x: 10, y: 10 })
// { x: 10, y: 10 }
```

### add

```ts
vcr.add({ x: 10, y: 10 }, 5)
// { x: 15, y: 15 }
```

### subtract

```ts
vcr.subtract({ x: 10, y: 10 }, 5)
// { x: 5, y: 5 }
```

### divide

```ts
vcr.divide({ x: 15, y: 15 }, 5)
// { x: 3, y: 3 }
```

### multiply

```ts
vcr.multiply({ x: 10, y: 10 }, 5)
// { x: 50, y: 50 }
```

### floor

```ts
vcr.floor({ x: 10.456, y: 10.789 })
// { x: 10, y: 10 }
```

### ceil

```ts
vcr.ceil({ x: 10.456, y: 10.789 })
// { x: 11, y: 11 }
```

### normalize

```ts
vcr.normalize({ x: 1, y: 1 })
// { x: 0.7071067811865475, y: 0.7071067811865475 }
```

### clone

```ts
vcr.clone({ x: 10, y: 10 })
// { x: 10, y: 10 }
```

[Source](src/index.ts)
[Source - Pure](src/pure.ts)
