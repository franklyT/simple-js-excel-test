const executeMetadata = (str, res) => {
  ex1 = performance.now();
  delimit(str, res);
  ex2 = performance.now();
  console.log((ex2 - ex1) + 'ms to execute.');
}
