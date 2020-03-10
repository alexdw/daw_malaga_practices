import Warrior from "./Warrior.js";
import Helpers from "./Helpers.js";

class Saxon extends Warrior {
	constructor(name, health, strength){
		super(name)
		this.health = Helpers.getRandom(8,12);
		this.strength = Helpers.getRandom(2,3);
	}
}

export default Saxon;