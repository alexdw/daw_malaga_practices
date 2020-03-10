import Viking from "./Vikings/Viking.js"
import Saxon from "./Vikings/Saxon.js"
import Helpers from "./Vikings/Helpers.js";
import Weapon from "./Vikings/Weapon.js";
import War from "./Vikings/War.js";

/*
const rahnar = new Viking('rahnar', 33, 12);
const lagherta = new Viking('lagherta', 35, 10);
const training = new Pit(rahnar, lagherta, 10);

training.fight();
training.showWinner();
*/


const vikingWeapons = [
    new Weapon('Combat Axe', 10 , 5), 
    new Weapon('Mace', 12, 3), 
    new Weapon('Long Sword', 8, 4)
];
const saxonWeapons = [
    new Weapon('Staff', 1 , 0), 
    new Weapon('Hammer', 2, 1), 
    new Weapon('Wood Shield', 1, 3)
];

const vikingArmy = Helpers.createArmy(Viking, 350, vikingWeapons);
const saxonArmy = Helpers.createArmy(Saxon, 1200, saxonWeapons);
const war = new War(vikingArmy, saxonArmy, 20);

war.killThemAll();
war.showWinner();
