import Helpers from "./Helpers.js";

class War {

	constructor(vikingArmy, saxonArmy, turns) {

		this.vikingArmy = vikingArmy;
		this.saxonArmy = saxonArmy;
		this.turns = turns;
		
	}

	killThemAll() {
		var viking;
		var saxon;
		var i = 0;
		var armiesAlive = true; 
	
		while(i < this.turns && armiesAlive){
			this.vikingArmy.forEach( (viking) => {
				saxon = this.saxonArmy[Helpers.getRandom(0, this.saxonArmy.length -1)];
				viking.hit(saxon);
			})
			this.saxonArmy = this.saxonArmy.filter(function(saxon){
					return saxon.health > 0;
			})
				
			this.saxonArmy.forEach( (saxon) => {
				viking = this.vikingArmy[Helpers.getRandom(0, this.vikingArmy.length)];
				saxon.hit(viking);		
			})
			this.vikingArmy = this.vikingArmy.filter(function(viking){
				return viking.health > 0;
			})
	
			armiesAlive = this.vikingArmy.length > 0 && this.saxonArmy.length > 0;
			i++;
		} 
		this.winner = this.vikingArmy.length > this.saxonArmy.length ? "Vikings" : "Saxons";
		this.turns = i; 
	}

	showWinner(){
		console.log(`the winner is  ${this.winner}`);
		console.log(`the turns were  ${this.turns}`);
		console.log(`Vikings alive;  ${this.vikingArmy.length}`);
		console.log(`Saxon alive;  ${this.saxonArmy.length}`);
	}
}

export default War;