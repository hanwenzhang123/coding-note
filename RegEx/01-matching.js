A Regular Expression lets you match patterns in strings.

//Matching Specific Characters
Regular Expressions
- Expression or Pattern
- String

? - matching the character before it 0 or 1 time

toyboats? ('s' is optional but if appear, only appears once)
toy ?boa?ts? (toyboat, toyboats, toy bots, toy boats)
[Ttj]oy[ -]?[Bb]oats? (everything in [] works)


//Matching Character Ranges
match ranges of characters such as a-z, A-Z or 0-9.
[A-Z]
[a-z]
[0-9]
[A-Za-z0-9]
