// 1. create a new HTML list ietm
// 2. check the 'inoffice' property
// 3.get the value for the 'name' property, insert it inside the <li> tag
// 4. close the <li> tag

// In this case, JSON.parse() will return an array of employee objects.
// Then, your objective is to convert that array into HTML that can be displayed on the page.
// var statusHTML = '<ul class="bulleted">' starts building an HTML string. which will later be imbedded in the webpage.
// And, also, in this case, you are constructing an unordered list.

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class = 'bulleted'>';  //hold ul tag
    for (var i = 0; i< employees.length; i+= 1) {// for loop to hold an array of data. hold the name and status 
      if (employees[i].inoffice === true) {   // go through each employeee
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;   //put the info into the HTML, insert to the div
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();
      
      
      
      
      
