// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function fibonacci(element: i32): i32 {
  if (element === 0) return 0;
  if (element === 1) return 1;

  return fibonacci(element - 2) + fibonacci(element - 1);
}

export function cube(n: i32): i32 {
  return n * n * n;
}

export function factorial(num: i32): i32 {

  if (num === 0) return 1
  if (num === 1) return 1;

  let fact = num;

  fact = fact * factorial(num-1);
  return fact;
}

export function sort_array(arr: Array<number>): void
{
  arr.sort()
}