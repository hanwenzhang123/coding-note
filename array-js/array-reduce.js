//let yoou turn all the items in an arrayy into one value
//example: return total, return sum, return to the most recent date
//like grocery shopping, shopping cart is accumulator while picking up new item is adding new arrayy item, return food basket to a total at the end

let total = [0, 1, 2, 3].reduce( (acc, cur) => acc + cur, 0);  //accumulator starts 0 here, if it is not given, it takes the first parameter as the initial value


//price total
const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);  //21.97


//name begin 'G'
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const gNameCount = names.reduce((count, name) => {
  if (name[0] === 'G'){
  return count +1;
  }, 
    return count; 
}, 0};
    // Result: 4

//phoneNumbers is array of 10 digit phone numbers, where the first three digits, in parentheses, are area codes. 
//Using reduce, return the total phone numbers with a 503 area code. Store the total in the variable numberOf503.

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503 = phoneNumbers.reduce((total, phoneNumberString) => {
    if (phoneNumberString.slice(1, 4) === "503") {
    total++;
  }
  return total;
}, 0);

                                
numberOf503 = phoneNumbers.reduce((count, phoneNumber) => { // This works too
  if(phoneNumber.includes('(503)')){
    count += 1;
  }
  return count;
},0);
