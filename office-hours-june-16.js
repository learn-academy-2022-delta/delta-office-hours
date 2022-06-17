// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

var characters = ["y", "a", "r", "r", "a"]

let charsReversed = characters.reverse()

console.log(charsReversed)

// Create the code that will log the largest number from the array.

const nums = [3, 57, -9, 20, 67]

let highestNum = nums[0]
for(let i = 0; i < nums.length; i++) {
  if(nums[i] > highestNum) {
    highestNum = nums[i]
    // console.log(highestNum)
  }
}

console.log(highestNum)


// Create the code that will log the smallest number from the array.

const newNumsArray = [300, 7, 82, 43, 5]

let smallestNum = newNumsArray[0]
for(let i = 0; i < newNumsArray.length; i++) {
  console.log("smallestNum", smallestNum, "current value", newNumsArray[i])
  if(newNumsArray[i] < smallestNum) {
    smallestNum = newNumsArray[i]
  }
}

console.log("smallest num", smallestNum)


for(let i = newNumsArray.length; i > 0; i --){
  console.log("index", i)
}