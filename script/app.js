console.log("Angry Bird");

// start the game using a prompt and then a function which starts the game 


const nameOfAngrybird  = prompt ("Please enter your Angry Bird's name");
if (nameOfAngrybird != null){
    document.getElementById("AngrysBirdsName").innerHTML = 
    "Let's play with our Angry Bird " +  nameOfAngrybird + "!";

};
// feature add button function to it 
/*<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Enter your Angry Bird's Name
</button>
*/
let hunger = 1;
let sleepiness = 1;
let boredom = 1;

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

// Information from W3school 
// function Increase Hunger 
function increaseHunger() {
    const element = document.getElementById("hungerbar");
    let width = 0;
    let id = setInterval(frame, 100);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++;
        element.style.width = width + '%';
      }
    }
  };


increaseHunger();


// id = "sleepinessbar" 

function increaseSleepiness() {
    const element = document.getElementById("sleepinessbar");
    let width = 0;
    let id = setInterval(frame, 100);
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
    let id = setInterval(frame, 100);
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
    let id = setInterval(frame, 100);
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





 hunger (){

 }    
     

const newAngryBird = new Angrybird("");

console.log(newAngryBird);
*/

