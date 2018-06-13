//canvas constants
const boxSideLength = 83;
const sceneWidth = 505;
const sceneHeight = 606;

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
		this.y = sceneWidth-40-83;
		this.x = 202;

	}


	reset(){
		this.sprite	= 'images/char-boy.png';
		this.y = sceneWidth-40-83;
		this.x = 202;
	}

	// Update the enemy's position, required method for game
	// Parameter: dt, a time delta between tickt
	update(){
		// You should multiply any movement by the dt parameter
    	// which will ensure the game runs at the same speed for
    	// all computers.
    	if(this.y ==0){
    		window.alert("You Won!");
			this.reset();
    	}


	}

	// Draw the enemy on the screen, required method for game	
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}

	handleInput(keyCode){
		switch (keyCode) {
			case 'left':
					if (this.x==0) {return;}
					else{this.x-=101;}	
					
				break;
			case 'right':
					if(this.x==404){return;}
					else{this.x+=101;}
				break;

			case 'up':
					if(this.y==50){this.y=0;}
					else{this.y-=83;}
				//console.log(this.y);

				break;	
			case 'down':
					if(this.y==sceneWidth-50-83){return;}
					else{this.y+=83;}
				break;	

			default:
				// statements_def
				break;
		}


	}
}

class ColisionHandler{
	constructor(player, enemies){
		self.player =player;
		self.enemies = enemies;
	}

	detectColision(){
		for(let enemy of self.enemies){
			var xdiff = Math.abs(self.player.x-enemy.x);
			var ydiff = Math.abs(self.player.y-enemy.y);
			if(xdiff+ydiff<40){
				self.player.reset();							
			}
		}
	}

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy()];
const player = new Player();
const myColisionHandler = new ColisionHandler(player,allEnemies);




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
