const grabMetadata = (str, res) => {
  ex1 = performance.now();
  delimit(str, res);
  ex2 = performance.now();
  document.getElementById("metadata").innerHTML = 
       Math.round(((ex2 - ex1)*1000 / 1000) + 
       ' ms to execute.' + 
       '<br>' +
       (document.getElementsByTagName("TR").length+1) +
       ' names processed.';
}
