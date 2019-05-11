const grabMetadata = () => {
  const exp = document.getElementById('export'),
        str = String(document.getElementById('string').value),
        res = document.getElementById('results'),
        md = document.getElementById('metadata'),
  
        ex1 = performance.now(); 
  delimit(str, res);
  const ex2 = performance.now();
  
  exp.style='display: block';
  
  if(res.innerHTML.length > 0) {
      md.innerHTML = 
           '~' +
            Math.round((ex2 - ex1)*1000 / 1000) + 
           ' ms to execute.' + 
           '<br>' +
           (document.getElementsByTagName('TR').length+1) +
           ' names processed.';
  }
}
