<h1 align="center">
  vcr-2d
</h1>
<h4 align="center">
    2d vector functions
</h4>

## :sparkles: Features <!-- omit in toc -->

- Immutable and mutable APIs
- Zero dependencies
- Fully typed

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
import * as vcr from 'vcr-2d'

const vector = vcr.create(10, 10)
console.log(vector)
// { x: 10, y: 10}

vcr.add(vector, { x: 5, y: 5 })
// If both x and y are the same, you can use the shorthand
vcr.add(vector, 5)
console.log(vector)
// { x: 15, y: 15 }
```

### Pure

```ts
import * as vcr from 'vcr-2d/pure'

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

```console
npm install vcr-2d
```

---

## :newspaper: API

> Standard

```ts
import * as vcr from 'vcr-2d'
```

> Pure

```ts
import * as vcr from 'vcr-2d/pure'
```

### create

```ts
create({ x: 10, y: 10 })
// { x: 10, y: 10 }
```

### add

```ts
add({ x: 10, y: 10 }, 5)
// { x: 15, y: 15 }
```

### subtract

```ts
subtract({ x: 10, y: 10 }, 5)
// { x: 5, y: 5 }
```

### divide

```ts
divide({ x: 15, y: 15 }, 5)
// { x: 3, y: 3 }
```

### multiply

```ts
multiply({ x: 10, y: 10 }, 5)
// { x: 50, y: 50 }
```

### floor

```ts
floor({ x: 10.456, y: 10.789 })
// { x: 10, y: 10 }
```

### ceil

```ts
ceil({ x: 10.456, y: 10.789 })
// { x: 11, y: 11 }
```

### normalize

```ts
normalize({ x: 1, y: 1 })
// { x: 0.7071067811865475, y: 0.7071067811865475 }
```

### clone

```ts
clone({ x: 10, y: 10 })
// { x: 10, y: 10 }
```

[Source](src/index.ts)

[Source - Pure](src/pure.ts)
