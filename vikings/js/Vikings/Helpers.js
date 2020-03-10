import Weapon from "./Weapon.js.js"

class Helpers {
	static getRandom(min,max){
		return Math.floor(Math.random() * max) + min;
	}

	static createArmy(UnitType, number, weapons){
      
		var army = [];
		var unit;
		for (var i = 0; i < number; i++) {
			unit = new UnitType;
			unit.weapon = weapons[Helpers.getRandom(0, weapons.length - 1)];
			army.push(unit)
		}
		return army;

	}

}

export default Helpers;