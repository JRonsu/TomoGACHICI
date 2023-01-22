// Create my TOMOGACHI
//Add Evolution system based on level like pokmeon
//I want a trust system with anger and love


class Tamagotchi {
    // Define the Tamagotchi class
    constructor(name) {
        // Define the constructor function, which runs when a new Tamagotchi object is created
        this.name = name; // Assign the input name to the 'name' property of the object
        this.level = 1; // Assign level 1 to the object
        this.hunger = 0; // Assign 0 to hunger
        this.sleepyness = 0; // Assign 0 to sleepyness
        this.boredom = 0; // Assign 0 to boredom
        this.anger = 0; // Assign 0 to anger
        this.love = 0; // Assign 0 to love
    }
}

// Create our TomoGachi and name it
function createTamagotchi() {
    // Define the createTamagotchi function
    let name = document.getElementById("name").value; // Get the value of the input 
    let myTamagotchi = new Tamagotchi(name); // Create a new Tamagotchi object and assign the input name to it
    console.log(`Your Tamagotchi's name is ${myTamagotchi.name}`); // Log the Tamagotchi's name to the console
    document.getElementById("create-button").style.display = "none"; // make button disappear after 1 click
    document.getElementById("name").style.display = "none"; // make input disappear after create button press
    document.getElementById("label").style.display = "none";// make label message disappear after create button press
}