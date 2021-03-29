const numbers = [1,2,3,4,5,6,7,8,9]; 

for (let sub of numbers)
{console.log( sub * sub)}




const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"


const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31



for (let i=0; i < paragraphs.length; i++ ) { 
  paragraphs[i].style.color= 'blue'; 
}

for (let p of paragraphs) {
    p.style.color = 'blue';
}
