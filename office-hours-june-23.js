// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]

// [0, 1, 2, 3]
// {key: value, key2: value, key3: value}

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const justCats = (arrayOfAnimals) => {
  // storing the return of filter into a variable called filteredCats
  let filteredCats = arrayOfAnimals.filter(singleAnimalObject => {
    // evaluating if the value of the key type is "cat"
    return singleAnimalObject.type === "cat"
  })
  // storing the return of map into a variable called mappedCatsAge
  let mappedCatsAge = filteredCats.map(singleFilteredAnimalObject => {
    // returning only the ages of the filtered cats
    return singleFilteredAnimalObject.age
  })
  // sorting through our mapped cats age to go from least to greatest
  return mappedCatsAge.sort((num1, num2) => num1 - num2) 
}



// singleAnimalObject = single instance in the array. 
// Ex: First iteration over arrayOfAnimals will be: { name: "Waffles", type: "dog", age: 7 }

console.log(justCats(animals))
// [
//   { name: 'Fluffy', type: 'cat', age: 14 },
//   { name: 'Hank', type: 'cat', age: 11 }
// ]


//  ------ Destructuring

// const waffles = { name: "Waffles", type: "dog", age: 7 }

// const { name, type, age } = waffles

let breakfast = {
  item1: "cereal",
  item2: "fish",
  item3: "eggs",
  item4: {
    beverage1: "coffee",
    beverage2: "chai tea",
    beverage3: "orange juice",
    beverage4: [
      {smoothie: "berries"},
      {smoothie: "greens"},
      {smoothie: "herbal"}
    ]
  } 
}

// breakfast.item4.beverage4 = {
//   smoothie1: "berries",
//   smoothie2: "greens",
//   smoothie3: "herbal"
// }

// let { smoothie1, smoothie2, smoothie3 } = breakfast.item4.beverage4

// console.log(smoothie1[0])

let { beverage4 } = breakfast.item4

console.log(beverage4)