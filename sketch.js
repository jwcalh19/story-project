var foodtype = false;
var destroy = false;
var life_death = false;
function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="The Three Little Pigs"; // title

  document.getElementById('author').innerHTML="Jackson Calhoun "; // author


  
  // All of your code goes under here
  

  var story = 'The Big Bad Wolf is very hungry and wants ' + type_of_food() ;
  // Create the text

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function type_of_food() {
  let food = Math.floor(random(1, 6)); // Random number rounded down
  if(food > 3) {
    foodtype = true;
    return 'rabbit. ' + rabbit();
  } else {
    foodtype = false 
    return 'pigs. ' + pigs();
  }
   
}

function rabbit() {
  if(foodtype == true) {
    return "The Big Bad Wolf eats the rabbit and does not bother the pigs."
 
  } else {
    return "";
  }
}

function pigs() {
if (foodtype == false)  {
    return "The big Bad Wolf goes to the straw house." + strawhouse()
  } else {
    return "";
  }
}

function strawhouse() {
  let blow = Math.floor(random(1, 6)); // Random number rounded down
  if(blow >= 2 && blow <= 3 ) {
    destroy = true;
    return "The Big Bad Wolf blows down the straw house and goes to the stick house." + stickhouse()
  } else {
    destroy = false;
    return "He gets tired and leaves the pigs alone."
  
  }
}
function stickhouse() {
  let blow = Math.floor(random(1, 6)); // Random number rounded down
  if(blow >= 2 && blow <= 3 ) {
    destroy = true;
    return " The Big Bad Wolf blows down the stick house and goes to the brickhouse house." + brickhouse() 
  } else {
    destroy = false;
    return " He gets tired and leaves the pigs alone."
 
  }
}
function brickhouse() {
  let blow = Math.floor(random(1, 6)); // Random number rounded down
  if(blow >= 2 && blow <= 3 ) {
    destroy = true;
    return " The Big Bad Wolf realizes can't blow down the brick house and heads for the chimney." + chimney() 
  } else {
    destroy = false;
    return " He gets tired and leaves the pigs alone."

  }

   
  }
  function chimney() {
    let life  = Math.floor(random(1, 6)); // Random number rounded down
    if(life >= 2 && life <= 3 ) {
      life_death = true;
      return " The Big Bad Wolf burns and the pigs are alive. "
    } else {
      life_death = false 
      return " He does not burn and eats all of the pigs . "
    }
     
  }
//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    