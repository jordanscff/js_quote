'use strict';
let quotes = document.getElementById('quotes')
let advices = document.getElementById('advices')
let quotesDiv = document.getElementById('quotes-div')
quotesDiv.innerHTML =  `<p>Choose selection above</p>`


//Get Quote
quotes.addEventListener("click", evt => {
  quotesDiv.innerHTML =  `<img id='ajax-spinner' src='ajax-spinner.gif'>`
  fetch('https://type.fit/api/quotes')
  .then(res => res.json())
  .then(quote => {
      const listNumber = getRandomInt(quote.length-1)
      quotesDiv.innerHTML =  `<p> ${quote[listNumber].text} </p>`
  })
});

//Get Advice
advices.addEventListener("click", evt => {
  quotesDiv.innerHTML =  `<img id='ajax-spinner' src='ajax-spinner.gif'>`
  fetch('https://api.adviceslip.com/advice')
  .then(res => res.json())
  .then(advice => {
      quotesDiv.innerHTML =  `<p> ${advice.slip.advice} </p>`
  })
});

//Random function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
