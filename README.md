# simple-js-excel-test


<a href="https://maldici.github.io/simple-js-excel-test/" target="_blank" rel="noopener">
Repo in GitHub Pages
</a>

Created under the premise of efficiently fulfilling co-worker's basic request to clean and prepare bulk data formatted as a raw list of first and last names with no delimiters. Various common name modifiers are accounted for, as are middle initials. 10,000 basic names took ~50-100ms, 100,000 of those names ~1s to parse and write to DOM on my work PC in Chrome 74.


Limitations

Middle names (as far am I'm aware, Stanford NER algorithms can't even accomplish this task, and seems doubly difficult for non-mixed data sets, i.e. names followed by subsequent names and not just other data), mixed data sets (non-name content), and unconventional unhyphenated names which run into the middle name problem.
