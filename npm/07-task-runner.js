//what is a task
Task is something you want to do over and over again

//common tasks
run test suit
compiling sass/typescript/coffeescript
starting a web server
starting a worker

npm run <name>
npm run test
npm run compile

//2 types of task
built-in
  "test"
  npm run test
  npm test
arbitrary
  "compile"
  npm run compile  
  

  
//create a built-in task
  npm install   //install modules that your work need
  node_module/.bin/mocha  //run mocha
//or you can change the ""scripts"":{"test": "mocha"} then run in the console
  npm test
  
  
//create an arbitrary task
  node_module/.bin/uglifyjs src/models/* src/frontend.js -m -c -o build/app.js
  //m flag mangles or reduces the name of some of the variables in the code
  //c flag combines the code into a single file
  //o flag is for output to where


in the package.json file
  "scripts"":{"test": "mocha",
               "uglify": "uglifyjs src/models/* src/frontend.js -m -c -o build/app.js"} 
  
  npm run uglify    //-compress and mangle to a file with a single line
  
  
  
in the package.json file 
  "scripts"":{"test": "mocha",
               "uglify": "uglifyjs src/models/* src/frontend.js -m -c -o build/app.js",
                "copy-files": "cp src/*.html build/ & cp src/*.css build/"}
                
  npm run copy-files
  
  
  
in the package.json file 
  "scripts"":{"test": "mocha",
               "uglify": "uglifyjs src/models/* src/frontend.js -m -c -o build/app.js",
                "copy-files": "cp src/*.html build/ & cp src/*.css build/",
                "build": "npm run copy_files && npm run uglify"}
                
  rm build/*   //it is just remove the file made previously            
  npm run build
  
  
