// Create my TOMOGACHI
//Add Evolution system based on level like pokmeon
// add cooldown to these buttons functions
// make sleep a loading process -- make it block out all other functions and at intervals go up to 100 until button pressed
// if nutrition level goes below 10, 5 times the Tomogotchi will Die 
// add starting egg photo and switch to sprite after hatches


class Tamagotchi {
    // Define the Tamagotchi class
    constructor(name) {
        // Define the constructor function, which runs when a new Tamagotchi object is created
        this.name = name; // Assign the input name to the 'name' property of the object
        this.level = 1;
        this.experience = 0;
        this.experienceThreshold = 10; // once met level up
        this.nutrition = 40; // Assign 0 to hunger
        this.rest = 100; // Assign 0 to sleepyness
        this.boredom = 100; // Assign 0 to boredom
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
            document.getElementById("sleep-button").style.display = "block"; //show sleep button
            document.getElementById("play-button").style.display = "block"; // show play button
            document.getElementById("stats").style.display = "block"; // show stats 
            
            
            // change Egg image to Tamagotchi after hatching 
            //create variable to select image Id
            let backgroundImage = document.getElementById("background-image");
            let imageUrls = [
                "/TomoGotchi-Sprites/CatTama.png",
                "/TomoGotchi-Sprites/BirdTama.png",
                "/TomoGotchi-Sprites/DogTama.png",
            ];

            // pick a random image
            let randomIndex = Math.floor(Math.random() * imageUrls.length);
            // use that variable to change selected image 
            backgroundImage.src = imageUrls[randomIndex];

        }
    }
    
    // leveling mechanic, threshhold will double every time you level up
    levelUp() {
        this.level++;
        this.experienceThreshold *= 2;
        console.log(`Congratulations, ${this.name} has leveled up to level ${this.level}!`);
    }


    feed() {
        if(this.nutrition > 0 && this.nutrition < 100) { // Check if nutrition is greater than 0 and less than 100
            this.nutrition += 10; // Increment nutrition by 10
            console.log("Tamagotchi was fed. Nutrition: " + this.nutrition);

            // add Experience to for feeding
            this.experience += 10;
            console.log(`${myTamagotchi.name} has gained ${this.experience} experience`)
            // If you reach the experience threshold you will level up
            if (this.experience >= this.experienceThreshold) {
                this.levelUp();
            }

        } else if(this.nutrition >= 100) {
            console.log("Tamagotchi is already full. Nutrition: " + this.nutrition);
        }
    }

    sleep() {
        if(this.rest < 100) {
            this.rest = 100; // Fill up the rest to 100
            console.log("Tamagotchi is resting. Rest: " + this.rest);

            // add Experience to for sleeping
            this.experience += 10;
            console.log(`${myTamagotchi.name} has gained ${this.experience} experience`)
            // If you reach the experience threshold you will level up
            if (this.experience >= this.experienceThreshold) {
                this.levelUp();
            }
        
        } else {
            console.log("Tamagotchi is already well rested. Rest: " + this.rest);
        }
    }


    play() {
        if (this.nutrition > 20 && this.rest > 20) {
             // If the Tamagotchi's boredom is going to be less than 0, just set it to 0
             if (this.boredom - 20 < 0) {
                this.boredom = 0;
            } else {
                this.boredom -= 20;
            }

            this.nutrition -= 20;
            this.rest -= 20
            console.log("Tamagotchi is playing. Boredom: " + this.boredom + " Nutrition: " + this.nutrition + " Rest: " + this.rest);
    
            // add Experience to for playing
            this.experience += 10;
            console.log(`${myTamagotchi.name} has gained ${this.experience} experience`)
            // If you reach the experience threshold you will level up
            if (this.experience >= this.experienceThreshold) {
                this.levelUp();
            }
        } else if (this.nutrition <= 20 || this.rest <= 20) {
            console.log("Tamagotchi is too tired to play.");
            // exit out of the function if the Tamagotchi is too tired to play
            return;
        }
    }

}

// variable used to store new instances of the tamagotchi
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
        updateStats()
    });
}


//Nutrition Function that effects love, sleepiness and anger and death if not fed within a certain amount of time
function feed() {
    document.getElementById("feed-button").style.display = "block"; // sets the love button to be visible
    document.getElementById("feed-button").addEventListener("click", () => { //adds a click event listener to the feed button
        myTamagotchi.feed(); // calls the feed function from the Tamagotchi class
        updateStats()
        // I want to add a cooldown to the button 
    });
}

function sleep() {
    document.getElementById("sleep-button").style.display = "block"; // sets the sleep button to be visible
    document.getElementById("sleep-button").addEventListener("click", () => { //adds a click event listener to the sleep button
        myTamagotchi.sleep(); // calls the sleep function from the Tamagotchi class
        updateStats()
        // I want to add a cooldown to the button 
    });
}


function play() {
    document.getElementById("play-button").style.display = "block"; // sets the play button to be visible
    document.getElementById("play-button").addEventListener("click", () => { //adds a click event listener to the play button
        myTamagotchi.play(); // calls the play function from the Tamagotchi class
        updateStats()
        // I want to add a cooldown to the button 
    });
}

// update the values on the page for tamagotchis stats
// grab the elemts by their ID and setting the innerHTML to the value stored in the tamagotchi object.
function updateStats() {
    document.getElementById("level-value").innerHTML = myTamagotchi.level;
    document.getElementById("exp-value").innerHTML = myTamagotchi.experience;
    document.getElementById("nutrition-value").innerHTML = myTamagotchi.nutrition;
    document.getElementById("rest-value").innerHTML = myTamagotchi.rest;
    document.getElementById("boredom-value").innerHTML = myTamagotchi.boredom;
    document.getElementById("love-value").innerHTML = myTamagotchi.love;
}
