# simple-js-excel-test


<a href="https://maldici.github.io/simple-js-excel-test/" target="_blank" rel="noopener">Repo in GitHub Pages
</a>


Regex is not used (<a href="https://github.com/maldici/-simple-js-excel-test-regex" target="_blank" rel="noopener"><u>sister regex repo</u></a>).


Created under the premise of efficiently fulfilling co-worker's basic request to clean and prepare data formatted as a raw list of first and last names with no delimiters.


Theory


This is an incredibly simple script that I used to solve a particular problem at work. There are probably better ways of doing it, but this worked for my use case.


If I introduced Giddywazzlefiddlypants McAlienface, you'd be able to understand and use his name without having an explicit reference for either name component under the premise that I have presented you with data following some more or less universal conventions (at least human ones) that I have explicitly demarcated as a 'name'. Humans do not have an endless library of names in their heads. This is important for my current employer, whom operates in an international context, as a dictionary of first and last names to reference would almost certainly be incomplete, and heavily cumbersome.


As such, I opted for the simple method of ascertaining names based on a common structure of two adjacement words with a space delimiter. A very limited dictionary of ban words avoids common pitfalls like "Jr.", "Sr.", "III", or one letter initials, which can easily be expanded upon in more languages.


Limitations


Middle names (as far am I'm aware, Stanford NER algorithms can't even accomplish this task, and seems doubly impossible for non-mixed data sets, i.e. names followed by subsequent names and not just other data), mixed data sets (non-name content), and unconventional unhyphenated names which run into the middle name problem.
