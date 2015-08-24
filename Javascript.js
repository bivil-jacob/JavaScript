
confirm("The alert on load to confirm!")

var promp = prompt("Your Name? ")
console.log(promp)

//number, string, boolean

//Array

var junk = ["hi", "hello", 2, 3];
console.log(junk);
var cities = ["Melbourne", "Amman", "Helsinki", "kochi", "NYC"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

////////////////////////////////////

console.log(2*5)
console.log("Hello")

console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length !== 8);
console.log(8*2 === 16);


if (2%1)
{
	console.log("The True case")
}
else
{
	console.log("Batman".substring(0,3))
	console.log("Laptop".substring(3,6))
	console.log("Janumary".substring(0,3))
	console.log("Melbourne is great".substring(0,12))
	console.log("Hamburgers".substring(3,10))
}

myCountry = "India"

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3) );


var bieber = function () {
	//Bieber game
	////////////////////////////////////////////////////////////////////////////////////////////////	
	// Check if the user is ready to play!
	confirm("I am ready to paly!")

	var age = prompt("What's your age")

	if(age < 13)	
	{
	    console.log("you are allowed to play at your risk")
	}
	else
	{
	    console.log("I am game!")
	}

	console.log("You are at a Justin Bieber concert, and you hear this lyric \'Lace my shoes off, start racing.\'")

	console.log("Suddenly, Bieber stops and says, \'Who wants to race me?\'")

	var userAnswer = prompt("Do you want to race Bieber on stage?")

	if (userAnswer === "yes")
	{
	    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
	}
	else
	{
	    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
	}

	var feedback = prompt("PLEASE RATE THE GAME ON 10")

	if(feedback > 8)
	{
	    console.log("Thank you! We should race at the next concert!")
	}
	else
	{
	    console.log("I'll keep practicing coding and racing.")
	}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

};

var orangeCost = function(cost)
{
    console.log(cost*5)
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var stringSearch = function()
{


var text = "hey bivil nwn hj hello hi happy india \
nknek jnwk mnek  bivil jiwfe";
var myName ="bivil"
var hits = []

for (var i = 0; i<text.length; i++)
{
    
    
    
    if(text[i] === myName[0])
    {
        for(var j=i; j<i+myName.length; j++)
        {
            hits.push(text[j]);   
        }
        
        
    }
    
}
if (hits.length === 0)
    console.log ("Your name wasn't found!")
else
    console.log(hits)

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var DragonSlayer = function()
{
	var slaying = true;

var youHit = Math.floor(Math.random() *2 );
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}


}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var RockPaperScissors = function(){

	var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} 
	else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} 
	else {
		computerChoice = "scissors";
	} 
	console.log("Computer: " + computerChoice);

	console.log(compare (userChoice, computerChoice))


};

var compare = function(choice1, choice2)
	{
	    if (choice1 === choice2)
	        return "The result is a tie!"
        
	    else if (choice1 === "rock")
	    {
	        if (choice2 === "scissors")
	        return "rock wins"
	        if (choice2 === "paper")
	        return "paper wins"
	    }
	    else if (choice1 === "paper")
	    {
	        if( choice2 === "rock")
		        return "paper wins"	
	        else 
		        return "scissors wins"
	    }
	    else
	    {
	        if (choice2 === "rock")
		        return "rock wins"
    	    else
   		     return "scissors wins"
    	}
    
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var MealChoice = function()
{
	var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var trollEscape = function () 
{
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
    } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}

};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var phoneBook = function()
{
	var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Loop


for (var i = 1; i < 11; i = i + 1)
{
	console.log(i);
}


//RockPaperScissors();
//stringSearch();
//DragonSlayer();
//sorangeCost(5)

//MealChoice();	
//trollEscape();
phoneBook();
//bieber()

