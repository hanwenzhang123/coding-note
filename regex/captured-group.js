string = '5337';
let regex = /(\d*)(\d{2})/; 
let replacement = '$ $1.$2'; 
string.replace(regex,replacement) // $ 53.37

replacement = '$$1.$2'; //$1.37 - here we print $ and 1 literally because of the two $$ we interpret as $
replacement = '$$$1.$2'; // $ 53.37 - $$ return $, and $1 for captured group

