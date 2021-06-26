'use strict';
let quotesDiv = document.getElementById('quotes-div')
fetch('https://type.fit/api/quotes')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML =  `<p> ${quote[0].text} </p>`
})

//Get Quote
let quotes = document.getElementById('quotes')
quotes.addEventListener("click", evt => {
  fetch('https://type.fit/api/quotes')
  .then(res => res.json())
  .then(quote => {
      const listNumber = getRandomInt(quote.length-1)
      quotesDiv.innerHTML =  `<p> ${quote[listNumber].text} </p>`
  })
})

//Random function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
