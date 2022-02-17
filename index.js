
function isPalindrome(word) {
  // Write your algorithm here
  let newWord = word.split('').reverse().join('');
  if (word == newWord){
    console.log(true)
    return true
  }
  else {
    console.log(true)
    return false
  }
}


/* 
  Add your pseudocode here
  write a fuction, that takes in 1 argument
  check if argument is a palindrone
  return false if not palindrone
*/
// 
  
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
