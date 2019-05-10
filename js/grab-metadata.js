const grabMetadata = (str, res) => {
  ex1 = performance.now();
  delimit(str, res);
  ex2 = performance.now();
  document.getElementById("metadata").innerHTML = ex2 - ex1 + ' ms to execute.' + (document.getElementsByTagName("TR").length+1) + ' names processed.';
}
