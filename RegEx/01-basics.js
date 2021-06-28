A Regular Expression lets you match patterns in strings.

//Matching Specific Characters
Regular Expressions
- Expression or Pattern
- String

? - matching the character before it 0 or 1 time

toyboats? ('s' is optional but if appear, only appears once)
toy ?boa?ts? (toyboat, toyboats, toy bots, toy boats)
[Ttj]oy[ -]?[Bb]oats? (everything in [] works)

colou/r
color
colour

//Matching Character Ranges
match ranges of characters such as a-z, A-Z or 0-9.
[A-Z]
[a-z]
[0-9]
[A-Za-z0-9]


//Using Wildcard Characters
Regular Expression Wildcard

Matched Pattern   WildCard
[0-9]              \d
[A-Za-z0-9]        \w
[ \t\r\n\f]        \s
Any Character      .


//Finding Repeated Characters
Repeating Character Matches

Matched Pattern   character
Zero or more      *
One or more       +
Zero or one       ?

Exact Number of Character Matches  
 
Matched Pattern   character
Three             {3}
Three or more     {3,}
Between 3 and 5   {3,5}

\w{5,9} - any words has a length between 5 and 9
\w{5,} - any character that has a length 5 and more


//Excluding Characters
Negated Characters

Matched Pattern                      character
nested character set                  [^]
match any character except @          [^@]  //everything that is not a @ symbol
match any character excepted @ and .  [^@.]

[^@]  //everything that is not a @ symbol, count as single characters
[^@]+ //match everything that is more than one character in our expression
[^@.] //inside is a '.', put outsize will be a wildcard
m[^@.]  //it will not match "toy@boat.com" because the 'm' not following any character after it

Opppsite Characters
Character     Opposite
\d digit      \D  not digits
\w word       \W  not words
\s whitespace \S  not whitespace

"toy@boat.com"
\W -> @ and . match


//Alternnation
| alternation, like || or in programming

whitespace counts

toy|sail|tug boat
toy boat|sail boat|tug boat


//Groups
Wildcard Group Matching
Matched Pattern               character
matches "subsub"              (sub){2}
matches "pat" and "subpat"    (sub)?pat

(toy|sail|tug) boat
google\.(com|net|org)
(www\.)?google\.(com|net)


//Beginning and Ending of Strings

beginning of a string	^
end of a string	$

^(www\.)?google\.(com|net)$

matching:
google.com
google.net
www.google.com
  
