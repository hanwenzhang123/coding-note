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
    return coount; 
}, 0};
    // Result: 4

