const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
console.log(planets)
planets.forEach( (planet) => {
  DOMcomponent = 
  `<div>
  <h1> ${planet}</h1>
  </div>`

  console.log(DOMcomponent)
  planetEl.innerHTML += DOMcomponent
})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
    

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let newArray = planets.map(function(planet){
  return planet.charAt(0).toUpperCase()+ planet.slice(1)
})
console.log(newArray)
planetEl.innerHTML += newArray

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

letterEArray = []
planets.forEach( (planet) => {
  if(planet.includes("e")) {
    letterEArray.push(planet)
  }
})
console.log(letterEArray)

const withE = planets.filter(planet => planet.includes("e"))
console.log(withE)
planetEL.innerHTML += withE

// Use the reduce method to create a sentence from the words in the following array
let words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
words = words.reduce( (previousWord, currentWord) => {
 `${previousWord} ${currentWord}`

})






