const grabMetadata = (str, res) => {
  const ex1 = performance.now();
  delimit(str, res);
  const ex2 = performance.now();
  const md = document.getElementById("metadata").innerHTML
  if(md.length > 0) {
      document.getElementById("metadata").innerHTML = 
           '~' +
            Math.round((ex2 - ex1)*1000 / 1000) + 
           ' ms to execute.' + 
           '<br>' +
           (document.getElementsByTagName("TR").length+1) +
           ' names processed.';
  }
}
