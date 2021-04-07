//touch boilerplate.js    create this file first

const fs = require('fs');
//fs is a module here we need to require
const folderName = process.argv [2] || 'Project' //project here is default folder name if no specific name assigned

try{
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`)
  fs.writeFileSync(`${folderName}/index.html`)
  fs.writeFileSync(`${folderName}/index.html`)
} catch (e) {
  console.log('something went wrong');
  console.log(e);
}


