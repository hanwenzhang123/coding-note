
// using Object Oriented JavaScript
// class - game, player, token, board, space

// Player.js
class Player {
  constructor(name, id, color, active = false){
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }
}

/**
  * Creates token objects for player
  * @param   {integer}   num - Number of token objects to be created
  * @return  {array}     tokens - an array of new token objects
  */

createTokens(num){
  const tokens = [];
  
  for (let i = 0; i < num; i++) {
    let token = new Token (i, this);
    tokens.push(token);
  }
  return tokens;
}


//Token.js
class Token {
  constructor() {
    this.owner = owner;
    this.id = 'token-${index}-${owner.id}';      //for DOM purpose
    this.dropped = false;   // this property holds a boolean value that indicates whether or not that taken has been played. initial value
  }
}
  
  
  //Board.js
class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = [];
  }
}


//Space.js
class Space {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.token = null;
  }
}


  
