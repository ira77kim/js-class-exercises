// let taylorsNum = Math.ceil(Math.random()*10);
// console.log("Initial number is "+ taylorsNum);
let taylorsNum = 5;
let value = taylorsNum;


// for(let a =0;a<=taylorsNum;a++){
    
//     taylorsNum = taylorsNum * (taylorsNum + 1);
//     factorialValue = initial*taylorsNum;
    
// }
for(let i=1;i=taylorsNum;i++){
    taylorsNum = taylorsNum-1;
    if(taylorsNum-1>0){
    console.log(taylorsNum);
    value *= taylorsNum;
    console.log("factorial value is " +value); 
    }
    
}
// console.log("this");


