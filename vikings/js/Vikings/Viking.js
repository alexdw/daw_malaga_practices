import Warrior from "./Warrior.js"
import Helpers from "./Helpers.js"

class Viking extends Warrior {
	constructor(name, health, strength){
		let vikingName  = name || "SuperViking " + Helpers.getRandom(0,10000);
		super(name);

		this.health = health || Helpers.getRandom(20,30);
		this.strength = strength || Helpers.getRandom(6,8);
		
	}
}

export default Viking;