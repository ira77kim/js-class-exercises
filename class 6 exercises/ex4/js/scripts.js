

//4. Create a function that checks a string or sentence and returns true if
//that parameter is a palindrome, (the string is the same forward as it is backward).


function words(string){
  let length = string.length;
  let characters=[];
  for(i=0 ; i<length ; i++){
    characters.push ( string.charAt(i) );
  }
  return characters;
}

// function palindrome(characters){
//   if (characters === characters.reverse()){
//     return "The word is palindrome.";
//   }
//   else{
//     return "The word is not palindrome.";
//   }
// }
//console.log(palindrome(words(myWord)));

function wordcheck(string,asset){
  // asset(string);
  console.log(asset(string)+ " changed into : " + asset(string).reverse());
  
  if (asset(string).join() == asset(string).reverse().join()){
    return "true";
  }
  else{
    return "false";
  }
}
console.log(wordcheck("dad",words));

