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

// died function 

/*const diedHunger = () =>{
    $('hungerbar').text('')
    if (hunger === 10 ) {
        return 
    }
}
*/
            

// Question - add value to my bar 
//setInterval(function () {hungerbar.innerHTML += hunger}, 1000);

// structure from the fucntion from W3school 
// feature increase timer - quicker reaction
// function Increase Hunger 
function increaseHunger() { 
    let id = setInterval(frame, 1500);
    function frame() {
      if (hunger == 10) {
        //clearInterval(id); //timer 
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
    const element = document.getElementById("sleepinessbar");
    let width = 0;
    let id = setInterval(frame, 300);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + '%';
      }
    }
  };


increaseSleepiness();





function increaseSleepiness() {
    const element = document.getElementById("sleepinessbar");
    let width = 0;
    let id = setInterval(frame, 300);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + '%';
      }
    }
  };


//id = "boredombar"

  function increaseboredam() {
    const element = document.getElementById("boredombar");
    let width = 0;
    let id = setInterval(frame, 300);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + '%';
      }
    }
  };

increaseboredam();



    
     



// attach function to the buttons 



// make the button add 10 % to each time they press it 

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
});


//id = "playbutton"

$("#playbutton").on("click", () => {
    console.log("play");
});


// Age 
// changes gif when 




/*
class AngryBird {
    constructor(name){
        this.age = 0;
        this.food = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.name = nameOfAngrybird;
     
    };

const food  = document.getElementById("myBtn").value; 

document.getElementById("myBtn").value = "newButtonValue"; 


var input = document.querySelector("#your-input-id")
var buttons = document.querySelectorAll("button.number-button")


for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    input.value = input.value + event.currentTarget.value
  })
}





/*
for (let hunger = 1; )
//id hungerbar
const hunger = 
setInterval
document.getElementById("hungerbar").innerHTML
= 
*/


// class progressHunger
/*function hungerIncrease(){
    let intervalID = window.setInterval ()
}

function hungerInterval() {
    if(hunger = 1) {

    }

}; 


if (hungry => ) {
    hunger++
}

const startGame = function () {
    time = setInterval(function()){
        
    }
}


// start the game by setInterval Hunger 
// when user enters name game starts 

// 


const startGame = ()
startGame(){
    console.log("Let's start playing");
};

startGame(); 




setInterval (function () {Element.innerHTML} += "Hunger" , 1000);

setInterval()



// Display the follwing metrics for your pet 

/*
Hunger (1-10scale)
Sleepiness (1-10 scale )
Boredom(1-10)

*/










//$("#exampleMaodel").modal()






//let hunger = 0;
//let sleep = 0;
//let bored = 0;

/*<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Enter your Angry Bird's Name
  </button> */

//  Ask for the name to start the game 
//$('.btn btn-primary').on('click', () => {
	//console.log('It worked!!!!');
//});

//$('.btn.danger').button('toggle').addClass('fat')

//$(document).on('.btn btn-primary');

//Button function Logic

// feed Pet 
// When the user clicks on the button hunger he feeds the pet 1 

 //class Angrybird {
     //constructor (name){
        //this.name = name;
        //this.hunger = 0;
        //this.sleep = 0;
        //this.bored = 0; 
    
    //feed(food){
     //return this.hunger += food;


     //const myAngrybird = new Angrybird (Sarah);


     /*class Angrybird {
         constructor (name){
             this.name = name;
             this.hunger = 1;
             this.sleepiness = 1;
             this.boredom = 1; 
             this.age = 1;
         }
     }


// Increase your pet's Hunger / inside Methods 

food(){
    if(this.hunger
}

// Increase your pet's Sleepiness 


// Increase your pet's Boredom 




 // Increase your pet's age every x minutes 

 // Increase your pet's Hunger /sleepiness and bores metrics on an interval of your pet 

// your pet should die if hunger sleepiness hits 10

// if this.hunger >= 10; 
  //  return (maybe a pop up / AngryBird is dead)






*/


// TO DO update hunger bar 


