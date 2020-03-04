

//2. Create a function that will accept a date or year and calculate if it falls on a Leap Year.
let input = window.prompt("year : ");
//let input = window;
console.log("Year " + input + " is...");

// if(input % 4 ==0 ){
//   console.log("Leap Year!");
// }
// else if(input%100==0 && input%400==0){
//   console.log("Leap Year!");
// }
// else{
//   console.log("Not a Leap Year");
// }

if(input %4 == 0){
  if(input%100 ==0 || input%400==0){
    console.log("Corrected : Leap Year!")
  }
}
else{console.log("Corrected : Not a Leap Year!");
}
