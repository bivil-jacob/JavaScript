
confirm("The alert on load to confirm!")

var promp = prompt("Your Name? ")
console.log(promp)

//number, string, boolean

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

RockPaperScissors();

//sorangeCost(5)

//bieber()

