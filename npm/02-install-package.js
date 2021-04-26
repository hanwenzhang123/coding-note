//install local package

//in the console

npm install -h //help

npm install (with no args, in package dir)
npm install [<@scope>/]<pkg>
npm install [<@scope>/]<pkg>@<tag>
npm install [<@scope>/]<pkg>@<version>
npm install [<@scope>/]<pkg>@<version range>
npm install <alias>@npm:<name>
npm install <folder>
npm install <tarball file>
npm install <tarball url>
npm install <git:// url>
npm install <github username>/<github project>


npm install bcrypt

python2 --version
npm install bcypt --python=python2 //using python2 in this npm package

             
//app.js
             
npm install bcryptjs
var unsecurePlainTextPassword = "password";
var bcrypt = require('bcryptjs');

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
    console.log(hash);
  });
});
//when we run in the console 'node app.js', we get a unique string 
            

//teacher's note
Issues installing bcrypt?
//If you are getting errors in the console while installing bcrypt, run npm install bcryptjs instead. Then require bcryptjs in app.js. For example:

Terminal Commands
//Clear the screen
clear
               
npm Command Line Usage
//See list of commands
npm
             
//Get help for a command
npm <command> -h
e.g. npm install -h
             
//Installing a package
npm install <package_name>
e.g. npm install bcrypt
e.g. with a flag npm install bcrypt --python=mySpecialPythonExecutable
             
             
             
             
//install global package
             
//-g means global
npm install http-server - g
http-server + the folder you want to serve
             then copy the url to see the site
             
npm Command Line Usage
//Get help for a command
npm <command> -h
e.g. npm install -h
             
//Installing a global package
npm install <package_name> -g
e.g. npm install http-server -g
             
             
//exercise
Install the npm package, coffee-script, globally.
> npm install coffee-script -g
             
             
             
             
              
