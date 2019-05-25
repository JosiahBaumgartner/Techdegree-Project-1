/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Timer variable to load new quote with printQuote() every 30s
const timer = window.setInterval(printQuote, 30000);

// Array containing all quotes, sources, citations and years. Use as pool to draw random quotes from.
const quotes = [
{
  quote: "Hmmm, yes, a tiny net is a death sentence. It's a net, and it's tiny.",
  source: "Master Betty",
  citation: "Kung Pow: Enter the Fist",
  year: "2002",
  category: "Movies"
},
{
  quote: "Killing is wrong. And bad. There should be a new, stronger word for killing. Like badwrong, or badong. Yes, killing is badong. From this moment, I will stand for the opposite of killing: gnodab.",
  source: "The Chosen One",
  citation: "Kung Pow: Enter the Fist",
  year: "2002",
  category: "Movies"
},
{
  quote: "My donkey senses are tingling all over.",
  source: "Donkey",
  citation: "Shrek 2",
  year: "2004",
  category: "Movies"
},
{
  quote:"In case you haven’t noticed, I'm weird. I’m a weirdo. I don't fit in. And I don't want to fit in. Have you ever seen me without this stupid hat on? That's weird.",
  source: "Jughead",
  citation: "Riverdale",
  year: "2017",
  category: "Television"
},
{
  quote: "You are my enemy but now you are my friend too",
  source: "Evil Shadex",
  citation: "Sonex the Hodgehead",
  year: "2015"
},
{
  quote: "I believe in freedom and god!",
  source: "Tail",
  citation: "Sonex the Hodgehead",
  year: "2015"
},
{
  quote: "You will no defeat! We will teach you all day!",
  source: "Sonex",
  citation: "Sonex the Hodgehead",
  year: "2015"
},
{
  quote: "I am robot Sonex! You fool Sonex and you cannot defeat robot Sonex!",
  source: "Dr. Robotnex",
  citation: "Sonex the Hodgehead",
  year: "2015"
},
];

// Generates random number 0-7, uses random number to pull random quote object from array.
const getRandomQuote = () => {
   let randomNumber = Math.floor(Math.random() * 8 );
   return (quotes[randomNumber]);
}

/*
  Resets the timer
  Used so button press does not cause display of quotes to be <30s
*/
const resetTimer = () => {
  clearInterval(timer);
  timer = window.setInterval(printQuote, 30000);
}

/*
  Takes the random quote object and builds it into an HTML string before injecting it to the proper id.
  Builds a random Hex value and injects the same random color into the body background color and the button color.
  Resets timer by means of resetTimer() when this funtion is run (after button press or timer ends)
*/
const printQuote = () => {

  var randomHex = "#" + Math.floor(Math.random() * 999999 )
  var randomQuote = getRandomQuote();
  var htmlString = "";
  htmlString += '<p class="quote">' + randomQuote.quote + '</p>';
  htmlString += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.category) {
    htmlString += '<br><span> Category:' + randomQuote.category + '</span></p>';
  }
  document.getElementById('quote-box').innerHTML = htmlString
  document.getElementById("body").style.backgroundColor =  randomHex
  document.getElementById("loadQuote").style.backgroundColor =  randomHex
  resetTimer();
}

/*
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call the `printQuote` function.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
