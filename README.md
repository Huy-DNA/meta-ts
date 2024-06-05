# meta-ts
A repo containing facilities for metaprogramming in typescript

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
check<SameType<number, number>> // pass!
check<SameType<number, string>> // failed!
```

## Pitfalls

* May not work correctly with `any`.
