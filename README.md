# HTML/jQuery Karnaugh Map Drawing Tool

View at https://accellarando.github.io/HtmlKmaps/

I started writing this to help me out with a homework assignment because I'm too stubborn to use LaTeX.

Right now you have to go into the console to use it (see Features). One day that might not be the case, but it's finals right now

## Features
- You can click on 0s to change to 1s or ds, etc
- Call addToImplicant(color,topLeftMinterm,bottomRightMinterm) from the js console to make a new implicant. e.g., addToImplicant("red",5,15) to draw an implicant covering BD. Note that this doesn't work across tables, ie when you're using 5 variables. Maybe someday.
- that's about it

## Todo
- Select different numbers of variables
- Instructions on the page
- <input>s to take addImplicant()'s parameters, then execute it
- Full support for 5 variables
- Download image
