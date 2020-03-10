import Helpers from "./Helpers.js.js"

class Warrior {
	
	constructor(name){
		this.name = name
		this.block = Helpers.getRandom(6,10);
		this.dodge = Helpers.getRandom(6,8);
	}

	hit( enemy ){
		var hitDamage = Helpers.getRandom(Math.floor(this.strength/2), this.strength);
		if(this.weapon){
			hitDamage += this.weapon.attackBonus;
		}
		enemy.reciveDamage(hitDamage);
	}
	reciveDamage ( damage ) {
		var blockBonus = this.weapon ? this.blockBonus : 0
		var block = (this.block + blockBonus) > Helpers.getRandom(1,10)
		var dodge = this.dodge > Helpers.getRandom(1,10)
		var minusDamage = damage - block - dodge;
	
		if(!block && !dodge){
			this.health -= damage;
		} else {
			 this.health -= minusDamage; 
		}
	}
}

export default Warrior;