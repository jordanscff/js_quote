'use strict';
fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML =  `<p> ${quote.quote} </p>`
})

//Get Quote
let quotes = document.getElementById('quotes')
quotes.addEventListener("click", evt => {
  let quotesDiv = document.getElementById('quotes-div')
  fetch('https://api.kanye.rest')
  .then(res => res.json())
  .then(quote => {
      quotesDiv.innerHTML =  `<p> ${quote.quote} </p>`
  })
})
