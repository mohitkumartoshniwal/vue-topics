function fibonacci(num: number): number {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

self.onmessage = (event) => {
  let term = event.data;
  let fibonacciValue = fibonacci(term);
  self.postMessage(fibonacciValue);
};
