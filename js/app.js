//canvas constants
const boxSideLength = 83;
const sceneWidth = 505

// Enemies our player must avoid
class Enemy{

	constructor(startingPos){
		// Variables applied to each of our instances go here,
    	// we've provided one for you to get started

    	// The image/sprite for our enemies, this uses
    	// a helper we've provided to easily load images
		this.sprite	= 'images/enemy-bug.png';

		//Randomly assign starting y position evenly spaced
		this.y = 55+Math.floor(Math.random()*3)*boxSideLength;
		this.x = 0;
		this.speed = Math.floor(Math.random()*300)+100
	}


	// Update the enemy's position, required method for game
	// Parameter: dt, a time delta between ticks
	update(dt){
		// You should multiply any movement by the dt parameter
    	// which will ensure the game runs at the same speed for
    	// all computers.
    	this.x = this.x + dt*this.speed;
    	if(this.x>=sceneWidth){
    		this.x =0;
    	}
    	console.log(dt);

	}

	// Draw the enemy on the screen, required method for game	
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{
	constructor(){
		// Variables applied to each of our instances go here,
    	// we've provided one for you to get started

    	// The image/sprite for our enemies, this uses
    	// a helper we've provided to easily load images
		this.sprite	= 'images/char-boy.png';
		this.x = 50;
		this.y = 50;

		
	}


	// Update the enemy's position, required method for game
	// Parameter: dt, a time delta between ticks
	update(dt){
		// You should multiply any movement by the dt parameter
    	// which will ensure the game runs at the same speed for
    	// all computers.

	}

	// Draw the enemy on the screen, required method for game	
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}

	handleInput(keyCode){


	}
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy()];
const player = new Player();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
