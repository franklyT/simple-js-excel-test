# simple-js-excel-test
<a href="https://maldici.github.io/simple-js-excel-test/" target="_blank" rel="noopener">
  
  
Repo in GitHub Pages
</a>


Created under the premise of efficiently fulfilling co-worker's basic request to clean and prepare data formatted as a raw list of first and last names with no delimiters. Regex is not used.


Theory


This is an incredibly simple script that I used to solve a particular problem at work. There are probably better ways of doing it, but this worked for my use case.


If I introduced Giddywazzlefiddlypants McAlienface, you'd be able to understand and use his name without having an explicit reference for either name component under the premise that I have presented you with data following some more or less universal conventions that I have explicitly demarcated as a 'name'. Humans do not have an endless library of names in their heads. This is important for my current employer, whom operates in an international context, as a dictionary of first and last names to reference would almost certainly be incomplete, and heavily cumbersome.

Here, being invoked is a class of "name", which you already have extensive structures for. Merely having that context of "name" gives you a powerful syntax, and any database that is explicitly, or can be recognized to only contain names easily simplifies our logic.


As such, I opted for the simple method of ascertaining names based on a common structure of two adjacement words with a space delimiter. A very limited dictionary of ban words is avoids common pitfalls like "Jr.", "Sr.", "III", or one letter initials., which can easily be expanded upon in more languages.


Limitations


Middle names (dictionary logic might be necessary here), data with any content except for names, unconventional unhyphenated names
