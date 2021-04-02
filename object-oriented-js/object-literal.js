//The values for name and color should be any string value, and the value for isTurn should be true.
//Add an empty method to the object literal called play().
//Inside the play method, write an empty if statement that checks if it's the players turn. Use dot notation.

const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
       if(this.isTurn) { 
         return this.name + " is now playing!"; 
       }
    } 
}

//On a new line after the existing code, change the value of the 'isTurn' property for player1 to false, using dot notation.
//On a new line after the existing code, change the value of the 'isTurn' property for player2 to true, using bracket notation.

const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        if (this.isTurn) {
            console.log(`${this.name} is now playing!`);
         }
    }
}

const player2 = {
    name: 'Guil',
    color: 'red',
    isTurn: false,
    play: function(){
        if (this['isTurn']) {
            console.log(`${this['name']} is now playing!`);
        }
    }
}

player1.isTurn = false;
player2['isTurn'] = true;
