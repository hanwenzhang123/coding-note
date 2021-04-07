Complete the implementation of the merge method in utilities.js file. 
You should be able to pass in a string with placeholders with percent signs (%) surrounding them. 
The second parameter should be an object with values to be inserted in to the placeholders. 



var utilities = require("./utilities");

var mailValues = {};

mailValues.first_name = "Janet";

var emailTemplate = "Hi %first_name%! Thanks for completing this code challenge :)";

var mergedContent = utilities.merge(emailTemplate, mailValues);

//mergedContent === "Hi Janet! Thanks for completing this code challenge :)";



function merge(content, values) {
  for (key in values) {
    content = content.replace("%"+key+"%", values[key]);
  }
  return content;
}


module.exports.merge = merge;
