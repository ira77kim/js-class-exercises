//function diceRoll(){
    let diceNum=Math.ceil(Math.random()*6);
    console.log("The first number that came out is "+ diceNum);
//}

/*
if(diceNum<=3){
    diceNum=Math.ceil(Math.random()*6);
    console.log("The number of eyes on the dice is "+ diceNum);
}
else if(diceNum>3){
    console.log("The number of eyes on the dice is greater than 3 : "+ diceNum);
}
*/
while(diceNum<=3){
    diceNum=Math.ceil(Math.random()*6);
    console.log("The number of eyes on the dice is "+ diceNum);
}

if(diceNum>3)console.log("The last number is greater than 3!");