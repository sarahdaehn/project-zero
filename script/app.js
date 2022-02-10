console.log("Angry Bird");

// start the game using a prompt and then a function which starts the game 


const nameOfAngrybird  = prompt ("Please enter your Angry Bird's name");
if (nameOfAngrybird != null){
    document.getElementById("AngrysBirdsName").innerHTML = 
    "Let's play with our Angry Bird " +  nameOfAngrybird + "!";

};
// TO DO 
// add new Gif after name


// feature add button function to it 
/*<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Enter your Angry Bird's Name
</button>
*/
let hunger = 0;
let sleepiness = 0;
let boredom = 0;
let life = true;
let age = 1; 

/*


life == false {
    if (hunger, sleepiness, boredom == 10);
}
if (life == false){
clearInterval(id)
}
*/
/*function checkLife(){
    if (life == false);
    console.log(life);
}
if 
*/


// Question - add value to my bar 
//setInterval(function () {hungerbar.innerHTML += hunger}, 1000);

// structure from the fucntion from W3school 
// feature increase timer - quicker reaction
// function Increase Hunger 
function increaseHunger() { 
    let id = setInterval(frame, 3000);
    function frame() {
      if (hunger == 10) {   
      alert(`Sorry your ${nameOfAngrybird} died of hunger!`);
      clearInterval(id);
      } else {
        hunger++;
        updateFoodBar();
      }
    }
  };

increaseHunger();


//takes the hungerbar element and displays the hungerBar 

function updateFoodBar() {
    const element = document.getElementById("hungerbar");
    element.style.width = `${hunger * 10}%`;
};

// id = "sleepinessbar" 

function increaseSleepiness() {
    let id = setInterval(frame, 3000);
    function frame() {
      if (sleepiness == 10) {
      alert(`Sorry your ${nameOfAngrybird} died of sleepiness!`);
      clearInterval(id);
      } else {
        sleepiness++;
        updateSleepBar();
      }
    }
  };


increaseSleepiness();

function updateSleepBar() {
    const element = document.getElementById("sleepinessbar");
    element.style.width = `${sleepiness * 10}%`;
};


//id = "boredombar"  boredom

  function increaseBoredom() {
    let id = setInterval(frame, 3000);
    function frame() {
      if (boredom == 10) {
      alert(`Sorry your ${nameOfAngrybird} died of boredom!`);
      clearInterval(id);
      } else {
        boredom++;
        updateBoredom();
      }
    }
  };

  increaseBoredom();

function updateBoredom() {
    const element = document.getElementById("boredombar");
    element.style.width = `${boredom * 10}%`;
};

//id = "foodbutton"

// function which responds to the button clicks and reduces hunger by one runs the function updateFoodbar 
$("#foodbutton").on("click", () => {
    console.log("food");
    hunger = hunger - 1;
    updateFoodBar();
});


 

// id = "sleepbutton"

$("#sleepbutton").on("click", () => {
    console.log("sleep");
    sleepiness = sleepiness - 1;
    updateSleepBar();
});


//id = "playbutton"

$("#playbutton").on("click", () => {
    console.log("play");
    boredom = boredom - 1;
    updateBoredom();
});




// Feature 
// when pet dies the other bars stop and the game starts over. 



// Increase your pet's age every x minutes 

// id = "age"

function increaseAge() {
  let id = setInterval(frame, 5000);
  function frame() {
    if (age === 10) {
    clearInterval(id);
    } else {
      age++;
      updateAge();
    }
  }
  };
increaseAge();



function updateAge() {
  const element = document.getElementById("age");
  element.style.width = `${age * 10}%`;
  console.log(age);
  $('#age').text('Age'+ age);
};

updateAge();


// Morph your pet at certain ages 
// if age == 5 change gif // element CSS




