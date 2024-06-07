# meta-ts

[![npm](https://img.shields.io/npm/v/@huy-dna/meta-ts.svg)](https://www.npmjs.com/package/@huy-dna/meta-ts) [![Download](https://img.shields.io/npm/dm/@huy-dna/meta-ts)](https://www.npmjs.com/package/@huy-dna/meta-ts)

A package containing facilities for metaprogramming in typescript

## Contribution

This package is mainly built to tweak with the Typescript's typechecker.

Don't be hesitate to challenge yourself and contribute some "predicate"s to this repo here: https://github.com/Huy-DNA/meta-ts.

## Bug reports

Post an issues on the package's repo!

## Installation

```bash
npm install @huy-dna/meta-ts
```

## Usage

The main checker is the two (dummy) functions `checkAll` and `check`:

```typescript
checkAll<[
    Predicate,
    Predicate,
    Predicate,
]>
```

and

```typescript
check<Predicate>
```

Basically, you can imagine these two as functions that accepts arguments in angle brackets `<>` and do not impose runtime overhead at all, as these will be checked as compile-time only.

## Predicates

From this section on, if a predicate `P` is said to be "true", it means that `check<P>` pass the Typescript typechecker.

Currently, these predicates are supported:

### `SameType<T, S>`

This predicate is true if `T` and `S` are the same type.

Example:

```typescript
check<SameType<number, number>> // passed!
check<SameType<number, string>> // failed!
```

### `DoesExtend<T, S>`

This predicate is true if `T` extends `S`.

Example:

```typescript
check<DoesExtend<number, string>> // failed!
check<DoesExtend<3, number>> // passed!
```

### `SameNumericalEnum<T, S>`

This predicate is true if enum `T` and enum `S` have the same keys with the same numerical value.

Example:

```typescript
enum E1 {
    A,
    B,
    C
}

enum E2 {
    A = 0,
    B,
    C = 2,
}

check<SameNumericalEnum<E1, E2>> // passed!
```

Note that this only works with number-valued enums!

## Pitfalls

* May not work correctly with `any`.
