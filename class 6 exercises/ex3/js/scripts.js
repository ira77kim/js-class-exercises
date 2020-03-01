

//3. Create a function that can perform a word count, given a block of text. Punctuations or special characters are not to be included.

let myString = "I want a chocolate cake!";
//console.log(myString.split(" ").length);
function wordcount(string){
  return string.split(" ").length;
}
console.log("There are " + wordcount(myString) + " words in the sentence : '" + myString+ "'");

