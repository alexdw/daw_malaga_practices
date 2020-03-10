class Lift{

  constructor(){
    this.damnFloor = 13;
    this.currentFloor = 0;
  }  

  goTo(floor){
    
    console.log(`You are in the floor ${this.currentFloor}`)
    
    if (this.currentFloor===this.damnFloor){
      throw new Error("Ohh no... a freak kill you on the damn floor")
    }

    if (this.currentFloor == floor) {
      console.log("You arrived at your destination, alive")
    }

    if (floor>this.currentFloor){
      this.currentFloor++;
      this.goTo(floor);
    }

    if (floor<this.currentFloor){
      this.currentFloor--;
      this.goTo(floor);
    }
   

  }
}
let lift = new Lift();
lift.goTo(3);
lift.goTo(6);
lift.goTo(3);
lift.goTo(15);