class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  get activity() {      //value is dynamic because it depends on the time
    const today = new Date();   // returns a string representation of the current date and time
    const hour = today.getHours(); //returns the hour for the specified date, according to local time.
  
    if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }
  
  get owner() {
    return this._owner;
  }
  
  set owner(owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }
  
  
  speak() {
    console.log(this.sound);
  }
} 

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

ernie.owner = 'Ashley';
