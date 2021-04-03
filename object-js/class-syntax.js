class Pet {   //capitalize in class is common
  constructor(animal, age, breed, sound) {     //creates an instance of the class
    this.animal = animal;  //this refers to the object that has been created
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  speak() {       //create a new method here
    console.log(this.sound);
  }
  
} 

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');




//New GPA

class Student {
    constructor(gpa){
        this.gpa = gpa;
    }
  stringGPA() {
    return this.gpa = "gpa"; 
  }
}
const student = new Student (3.9);




//class syntax

class MyClass {
  constructor(name) {
    this.name = name;
  }
  myMethod() {
    return this.name;
  }
}

const myInstance = new MyClass('Martin');

console.log(myInstance);// ->

{
  name: 'Martin',
  myMethod() {
    return this.name;
  }
}
