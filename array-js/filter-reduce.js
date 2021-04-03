const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

const product = products
.filter(product => product.price < 10)
.reduce(highest, product) => {
  if (highest.price > product.price) {
    return highest;
  }
  return product;
});

console.log(product);
    // Result: { name: 'paper towels', price: 6.99 }




    // Result: 239.97
const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

const total = products
.filter(product => product.price > 10)
.reduce((sum, product) => { sum + product.price, 0}) // have to add 0 here to start 0, can't start sum because it is string, not number here
.toFixed(2); // return 2 decimal number at the end

console.log(total);



                          
                          
//Using the filter and reduce methods on the purchaseItems array
//add the total price of all the groceries (items with a dept. of groceries).                      
 const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal = purchaseItems
.filter(item => item.dept === 'groceries')
.reduce((total, item) => total+item.price, 0)
.toFixed(2);

Console.log(groceryTotal);                         
// groceryTotal should be: 9.47                         
                         
