# simple-js-excel-test
<a href="https://maldici.github.io/simple-js-excel-test/" target="_blank" rel="noopener">
Repo in GitHub Pages
</a>
Created under the premise of efficiently fulfilling co-worker's basic request to clean and prepare data formatted as a raw list of first and last names with no delimiters.


Theory

If I introduced Gallywazzlefiddlypants McAlienface, you'd be able to understand and use his name without having an explicit reference for either name component. Humans do not have an endless library of names in their heads. This is important for my current employer, whom operates in an international context, as a dictionary of first and last names to reference would almost certainly be incomplete, and heavily cumbersome.

Here, being invoked is a class of "name", which you already have extensive structures for. Merely having that context of "name" gives you a powerful syntax, and any database that is explicitly, or can be recognized to only contain names easily simplifies our logic.

As such, I opted for the simple method of ascertaining names based on a common structure of two adjacement words with a space delimiter. A very limited dictionary of ban words is necessary to avoid common pitfalls like "Jr", "Sr", "Del", "Al", "III", etc., and can be expanded upon in different languages.
Limitations

Middle names (initials can be added to the ban list, but dictionary logic might be necessary here), data with any content except for names, un-hyphenated names
