console.log("Angry Bird");

// start the game using a prompt and then a function which starts the game 


const nameOfAngrybird  = prompt ("Please enter your Angry Bird's name");
if (nameOfAngrybird != null){
    document.getElementById("AngrysBirdsName").innerHTML = 
    "Let's play with our Angry Bird " +  nameOfAngrybird + "!";

};

let hunger = 0;
let sleepiness = 0;
let boredom = 0;
let age = 1; 


// structure for Interval function from W3school 

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
      changeAgePicture();
    }
  }
  };
increaseAge();



function updateAge() {
  const element = document.getElementById("age");
  element.style.width = `${age * 10}%`;
  console.log(age);
  $('#age').text('Age '+  age);
};

updateAge();
 
// Morph your pet at certain ages


function changeAgePicture() {
  if (age === 3) {
    $('div#age1 img').attr("src", "./Images/giphy-age3.gif");
    console.log("change Age 3");

};
if (age === 5) {
  $('div#age1 img').attr("src", "Images/giphy-age5.gif");
  console.log("change Age 5");
};
if (age === 7) {
  $('div#age1 img').attr("src", "Images/giphy-age7.gif");
  console.log("change Age 7");
};

};
changeAgePicture();


/* 
Feature JS 

1. not able to press the button after Angry Bird is dead.
2. when pet dies the other bars stop and the game starts over. / lifeStatus
3. create Levels increase timer each Level 
4. add value to Progress bar 
5. When Angry Birds dies pop up Gif and games ends 
6. restart the game automatically without to refresh the browser 



Feature HTML 

1. restructur the index File 

Feature CSS

1. header 
2. GIF Quality - stop the zoom in when the Browser grows
3. Change Background first loading 
4. change colors from the buttons and bar 

*/

