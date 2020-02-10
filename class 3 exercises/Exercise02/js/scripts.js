
//1. create a function that searches a string and find if it contains a pattern eg. life case insensitive.

const my_quote = "The Answer to the Great Question Of Life, the Universe and Everything is Forty-two";
let newString;


function findMatch( string1, pattern, callback) { 
    //write your search code and return yes/no
    let findStr = string1.indexOf(pattern);
    
    console.log ("The value of this function is " + findStr); // -1 value means nothing is found
    if(findStr == -1){
        return 'No';
    }
    else{
        return callback(string1, pattern); 
    } 
     //why is this not reachable / undetected?
   
}
console.log("found? " + findMatch( my_quote, 'Life', changeWord));
//console.log(newString);



function changeWord(string1, pattern){

    newString= string1.replace(pattern, pattern.toUpperCase());
    return newString;
}
console.log(changeWord(my_quote, 'Life'));
//console.log(newString);