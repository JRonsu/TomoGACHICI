// Create my TOMOGACHI
//Add Evolution system based on level like pokmeon
// add cooldown to these buttons functions
// make sleep a loading process -- make it block out all other functions and at intervals go up to 100 until button pressed
// if nutrition level goes belo 10 5 times the Tomogotchi will run away  
// add starting egg photo and switch to sprite after hatches


class Tamagotchi {
    // Define the Tamagotchi class
    constructor(name) {
        // Define the constructor function, which runs when a new Tamagotchi object is created
        this.name = name; // Assign the input name to the 'name' property of the object
        this.level = 1; // Assign level 1 to the object
        this.nutrition = 40; // Assign 0 to hunger
        this.rest = 0; // Assign 0 to sleepyness
        this.boredom = 50; // Assign 0 to boredom
        this.anger = 0; // Assign 0 to anger
        this.love = 0; // Assign 0 to love
    }

    addLove() {
        if(this.love < 50) { // check if love is less than 50
            this.love += 1; // add 1 to love
            console.log("Egg wiggles, keep clicking. Love: " + this.love); // log message to console with current love amount
            this.hatch(); // check if egg can hatch
        }
    }
    
    hatch() {
        if (this.love >= 50) {
            this.isHatched = true;
            console.log(`Congratulations! Your Tamagotchi ${this.name} is hatched!`);
            document.getElementById("add-love-button").style.display = "none";// when its hatched make button disappear
            document.getElementById("feed-button").style.display = "block"; // when its hatched show feed button
            document.getElementById("sleep-button").style.display = "block";
            document.getElementById("play-button").style.display = "block";
        }
    }
    

    feed() {
        if(this.nutrition > 0 && this.nutrition < 100) { // Check if nutrition is greater than 0 and less than 100
            this.nutrition += 10; // Increment nutrition by 10
            console.log("Tamagotchi is fed. Nutrition: " + this.nutrition);
        } else if(this.nutrition >= 100) {
            console.log("Tamagotchi is already full. Nutrition: " + this.nutrition);
        } else {
            console.log("Tamagotchi is hungry. Nutrition: " + this.nutrition);
        }
    }

    sleep() {
        if(this.rest < 100) {
            this.rest = 100; // Fill up the rest to 100
            console.log("Tamagotchi is resting. Rest: " + this.rest);
        } else {
            console.log("Tamagotchi is already well rested. Rest: " + this.rest);
        }
    }


    play() {
        if (this.nutrition > 20 && this.rest > 20) {
            this.boredom -= 20;
            this.nutrition -= 20;
            this.rest -= 20
            console.log("Tamagotchi is playing. Boredom: " + this.boredom + " Nutrition: " + this.nutrition + " Rest: " + this.rest);
        } else if (this.nutrition <= 20 || this.rest <= 20) {
            console.log("Tamagotchi is too tired to play.");
        }
    }

}


let myTamagotchi;

// Create our TomoGachi and name it
function createTamagotchi() {
    // Define the createTamagotchi function
    let name = document.getElementById("name").value; // Get the value of the input 
    myTamagotchi = new Tamagotchi(name); // Create a new Tamagotchi object and assign the input name to it
    console.log(`Your Tamagotchi's name is ${myTamagotchi.name}`); // Log the Tamagotchi's name to the console
    document.getElementById("create-button").style.display = "none"; // make button disappear after 1 click
    document.getElementById("name").style.display = "none"; // make input disappear after create button press
    document.getElementById("label").style.display = "none";// make label message disappear after create button press
    gotchiLove();
    
}

// Gotchi Love function & Hatch Egg Mechanic & TBC trust gain/lost mechanic
function gotchiLove() {
    document.getElementById("add-love-button").style.display = "block"; // sets the love button to be visible
    document.getElementById("add-love-button").addEventListener("click", () => { //adds a click event listener to the love button
        myTamagotchi.addLove(); // calls the addLove function from the Tamagotchi class
    });
}


//Nutrition Function that effects love, sleepiness and anger and death if not fed within a certain amount of time
function feed() {
    document.getElementById("feed-button").style.display = "block"; // sets the love button to be visible
    document.getElementById("feed-button").addEventListener("click", () => { //adds a click event listener to the feed button
        myTamagotchi.feed(); // calls the feed function from the Tamagotchi class
        // I want to add a cooldown to the button 
    });
}

function sleep() {
    document.getElementById("sleep-button").style.display = "block"; // sets the sleep button to be visible
    document.getElementById("sleep-button").addEventListener("click", () => { //adds a click event listener to the sleep button
        myTamagotchi.sleep(); // calls the sleep function from the Tamagotchi class
        // I want to add a cooldown to the button 
    });
}


function play() {
    document.getElementById("play-button").style.display = "block"; // sets the play button to be visible
    document.getElementById("play-button").addEventListener("click", () => { //adds a click event listener to the sleep button
        myTamagotchi.play(); // calls the play function from the Tamagotchi class
        // I want to add a cooldown to the button 
    });
}
