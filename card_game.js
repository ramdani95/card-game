//const readlineSync = require("readline-sync");

// getInput() is a function that takes a `prompt` as an argument which
// is a question (string) to ask the user.
// the returning value of getInput() is a string of whatever the user has typed as the response



// YOUR CODE STARTS HERE!!

// STEP ONE - Building A Deck.

//buildDeck.push and position array
// 1. use a function declaration to create a buildDeck function.

function buildDeck() {
  const suits = ["Diamond", "Club", "Heart", "Spade"];
    const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let deck =[];
    console.log(buildDeck());
    
    for (a=0;a<ranks.length;a++){
      for (i=0;i<suits.length;i++) {

  console.log(suits[i]);
  console.log(ranks[a]);
   let deckObject={Suit:suits[i], Rank:ranks[a]};
     deck.push= [{Suit:Diamond, rank:A, value:0},{Suit:Diamond, rank:2, value:1},{Suit:Diamond, rank:3, value:2},
     {Suit:Diamond, rank:4, value:3}, {Suit:Diamond, rank:5, value:4}, {Suit:Diamond, rank:6, value:5}, {Suit:Diamond, rank:7, value:6},
     {Suit:Diamond, rank:8, value:7}, {Suit:Diamond, rank:9, value:8},{Suit:Diamond, rank:10, value:9}, {Suit:Diamond, rank:J, value:10},
     {Suit:Diamond, rank:Q, value:11}, {Suit:Diamond, rank:K, value:12}], [{Suit:Club, rank:A, value:0},{Suit:Club, rank:2, value:1},
     {Suit:Club, rank:3, value:2},{Suit:Club, rank:4, value:3}, {Suit:Club, rank:5, value:4}, {Suit:Club, rank:6, value:5},
     {Suit:Club, rank:7, value:6},{Suit:Club, rank:8, value:7}, {Suit:Club, rank:9, value:8},{Suit:Club, rank:10, value:9},
     {Suit:Club, rank:J, value:10}, {Suit:Club, rank:Q, value:11}, {Suit:Club, rank:K, value:12}], [{Suit:Heart, rank:A, value:0},
     {Suit:Heart, rank:2, value:1}, {Suit:Heart, rank:3, value:2}, {Suit:Heart, rank:4, value:3}, {Suit:Heart, rank:5, value:4}, 
     {Suit:Heart, rank:6, value:5}, {SuitSuit:Heart, rank:7, value:6}, {Suit:Heart, rank:8, value:7}, {Suit:Heart, rank:7, value:6}, 
     {Suit:Heart, rank:8, value:7}, {Suit:Heart, rank:9, value:8}, {Suit:Heart, rank:10, value:9},{Suit:Heart, rank:J, value:10}, 
     {Suit:Heart, rank:Q, value:11}, {Suit:Heart, rank:K, value:12}], [{Suit:Spade, rank:A, value:0}, {Suit:Spade, rank:2, value:1}, 
     {Suit:Spade, rank:3, value:2}, {Suit:Spade, rank:4, value:3}, {Suit:Spade, rank:5, value:4}, {Suit:Spade, rank:6, value:5}, 
     {Suit:Spade, rank:7, value:6}, {Suit:Spade, rank:8, value:7}, {Suit:Spade, rank:9, value:8}, {Suit:Spade, rank:10, value:9}, 
     {Suit:Spade, rank:J, value:10}, {Suit:Spade, rank:Q, value:11}, {Suit:Spade, rank:K, value:12}];

  

}   }
return deck;
}

console.log(buildDeck);


function shuffle(deck) {
  let shuffledDeck= deck;
  let currentIndex = deck.length;
  let temporaryValue = 0; 
  let randomIndex = 0; 
  
}
while (currentIndex !== 0) {
  if (currentIndex =52) { 
    console.log("stop looping")
    
  }
  else (currentIndex > 52)
  console.log("keep looping")
 let randomInt= math.floor(Math.random()*currentIndex) 
 
{
 const array = [temporaryValue, shuffledDeck, currentIndex];
 var shuffledDeck, randomIndex=shuffledDeck (currentIndex);
 let shuffledDeck, randomIndex= 

   
  
}
  





// 5. Inside the while loop, use the javascript Math.methods to generate a random integer between 0 and "currentIndex"
// 6. Inside the while loop, decrement current index by 1. (should be after step 9)
// 7. Inside the while loop, assign "temporaryValue" with "shuffledDeck" (which is an array) to the [currentIndex].


// 8. Still inside, assign "shuffledDeck[currentIndex]" a value of shuffledDeck to the [randomIndex]
// 9. Still inside, assign "shuffledDeck[randomIndex]" a value of "temporaryValue".  (currentIndex //i--;)
// 10. Review the code from steps 7,8, and 9, and leave a comment explaining what you believe those lines of code are doing as they swap assignments of values between them.
// 11. Finally, close the while loop and return "shuffledDeck". You should now be able to run shuffle(buildDeck()) in node and see your shuffled deck of cards.

// STEP THREE - Greeting the player
// 1. Declare a function called greet()
// 2. Inside that function, declare a variable called "name" and use "getInput()" to welcome the user to the game, ask for their name, and assign their answer.
// 3. Console.log name
// 4. return name
// 5. Done.

// STEP FOUR - comparing cards
// 1. declare a function called compare that takes two cards as arguments
// 2. return the value property of the first card minus the value property of the second card.

// STEP FIVE - Respond to User Guess
// 1. declare a function called guess that takes two cards as arguments
// 2. console.log the rank and suit of the current card
// 3. declare a variable called "input" that uses getInput() to ask the user if they think the next card will be higher (h) or lower (l) than their current card and stores the user's response.
// 4. use a conditional statement to see if "input" equals "h" or "l".
// 5. If input equals h, return an expression that checks if the outcome of the compare function (using the same arguments as you used for guess) is a negative number.
// 6. If input equals l, check and see if it's a positive number.
// 7. If input doesn't equal h or l, tell the user that they need to guess either h or l and that they get no points for this round, then return false.

// STEP SIX - Let's play!
// 1. declare a function called playGame
// 2. declare a variable called deck (it's okay to reuse -- remember scope!) that takes the result of the shuffle function. Remember that the shuffle function needs to take the results one of our other functions as its argument...
// 3. declare a variable called playerName that takes the result of the greet function as its value.
// 4. using let, declare a score variable that's currently set to the number zero
// 5. use an array method on deck to remove the last object in deck. using let, declare a variable called currentCard and assign it this value.
// 6. create a while loop whos conditions are that score is less than five AND less than the amount of items still in the deck array.
// 7. Inside the while loop, use an array method on deck to remove the last object and assign that value to a variable named nextCard.
// 8. Inside the while loop, create a conditional statement. If the outcome of guess is true, increment the score by 1, congratulate the user, and tell them their score. If it's false, tell them they were wrong and got no points.
// 9. Close the conditional statement and assign nextCard to currentCard. You may have to write this as the type of variable that's always global...
// 10. Close the while loop and use a ternary statement that checks if the length of the deck array has reached zero. If it has not, tell the user that they won. If it has reached zero, tell them that they're out of cards and they lost.
// 11. Write a line of code to execute the playGame function.
