// Create my TOMOGACHI
//Evolution system based on level like pokmeon
//I want a trust system with anger and love
//User inpupt their own name Tomo 

class Tamagotchi {
    constructor(tomoName) {
      this.level = 1;
      this.hunger = 0;
      this.sleepyness = 0;
      this.boredom = 0;
      this.anger = 0;
      this.love = 0;
    }
}

let name = prompt("Enter a name for your Tamagotchi:"); // I dont like the interference of the prompt
let myTamagotchi = new Tamagotchi(tomoName);
console.log(`Your Tamagotchi's name is ${myTamagotchi.name}`);
