// Create my TOMOGACHI
//Evolution system based on level like pokmeon
//I want a trust system with anger and love

class Tamagotchi {
    constructor() {
      this.level = 1;
      this.hunger = 0;
      this.sleepyness = 0;
      this.boredom = 0;
      this.anger = 0;
      this.love = 0;
    }
}

const myTamagotchi = new Tamagotchi();
console.log(myTamagotchi);
