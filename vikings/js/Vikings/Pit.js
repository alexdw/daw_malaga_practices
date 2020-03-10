class Pit {
	constructor(viking1, viking2, turns) {
		this.viking1 = viking1;
		this.viking2 = viking2;
		this.turns = turns;
	}
	fight(){
		var minHealth = 7; 
		while(this.turns > 0 && this.viking1.health > minHealth && this.viking2.health > minHealth){
			this.viking1.hit(this.viking2);
			this.viking2.hit(this.viking1);
			this.turns--
		}
		this.winner = this.viking1.health > this.viking2.health ? this.viking1 : this.viking2;
	}

	showWinner() {
		console.log(`And the winner is  ${this.winner.name}`)
	}

}

export default Pit;