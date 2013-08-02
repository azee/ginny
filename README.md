Ginny - make a wish!
=====

A simple Swiss Army Knife for JS UI developers

Contains of useful frequently used functions for UI developers.

You'll find docs and examples is example.html and example.js files.

Just include ginny.js:
`<script data-main="js/main" src="ginny.js"></script>`

And use:

Escaping htm:
```
Ginny.escapeHtml(STRING_WITH_TAGS_TO_ESCAPE)
```

Get url parameter value from the location by name:
```
Ginny.getParameterByName(PARAM_NAME)
```

Get cookie value by name:
```
Ginny.getCookie(COOKIE_NAME)
```

Converts milliseconds to date string:
```
Ginny.timeToDate(MILLISECONDS)
```

Converts milliseconds to date string:
```
Ginny.timeToDateNoTime(MILLISECONDS)
```

Converts milliseconds to passed time string:
```
Ginny.timePassed(MILLISECONDS)
```

Converts a comma separated string to a trimmed array:
```
Ginny.stringToArray("someEmail@devnull.com, anotherEmail@devnull.com, oneMoreEmail@devnull.com")
```

Converts an array of strings to a comma separated string, suitable to push into input or an object on page:
```
Ginny.arrayToString(["myLogin","herLogin","hisLogin"])
```

Return string limited with provided number of chars with "..." at the end if needed. The output length is always <= limit:
```
Ginny.getLimitedString("Here is a long string need to be cut by 30", 30)
```

Appends only a unique string into array - like Set in Java:
```
Ginny.addUniqueStringToArray("String1", ["String1", "String2", "String3"])
Ginny.addUniqueStringToArray("String4", ["String1", "String2", "String3"])
```

The project has just started - please feel free to add new functions.


