//Managing Dependencies in the package.json File
A package.json file is the standard way to manage your dependencies in a project. 
The dependencies value is used to specify any other modules that a given module (represented by the package.json) requires to work. 
When you run npm install from the root folder of a given module, it will install any modules listed in that dependencies hash.

//teacher'snode

//npm Command Line Usage
//Get help for a command
npm <command> -h
e.g. npm init -h

///Initializing a package.json file
npm init

npm help json for what each of the fields in the package.json does
//Installing an npm Package as a dependency
npm install colors --save

//Installing an npm Package as a development dependency
npm install mocha --save-dev

//Install all packages specified in your package.json
npm install <flags>
e.g. npm install
e.g. npm install --python=python2

//Running npm in a production environment
NODE_ENV=production npm install

//Git Usage
To ignore files create a .gitignore and add the files and folders you want to ignore.
Example .gitignore file:
node_modules/
.DS_Store
config/database.yml



//npm init

package name: (hanwenzhang) hash_generator
version: (1.0.0) 0.0.1
description: A password hash generator
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Hanwen Zhang
license: (ISC) MIT
About to write to /Users/hanwenzhang/package.json:

{
  "name": "hash_generator",
  "version": "0.0.1",
  "description": "A password hash generator",
  "main": "index.js",
  "dependencies": {
    "-": "^0.0.1",
    "g": "^2.0.1",
    "http-server": "^0.12.3"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Hanwen Zhang",
  "license": "MIT"
}


Is this OK? (yes) 

//app.js
             
//npm install bcryptjs
//npm install colors --save

var unsecurePlainTextPassword = "password";

var colors = require('colors')
var bcrypt = require('bcryptjs');

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
    console.log(hash.color);
  });
});



//mocha
//install mocha package
npm install mocha --save-dev    
//mocha is testing requires a test holder
/test

//package.json
  "devDependencies": {
    "mocha": "^8.3.2"
  },
  "scripts": {
    "test": "mocha"   //change here to mocha to run mocha test
  },
  "author": "Hanwen Zhang",
  "license": "MIT"

npm test    //testing mocha 

npm install --python=python2
//with an node environment, only the dependencies that need to run, not the dev dependencies
NODE_ENV=production npm install --python=python2


//exercise
Initialize a package.json file with the npm command line application.
npm init


  
