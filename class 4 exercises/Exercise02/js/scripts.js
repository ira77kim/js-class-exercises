let question = prompt('Ask your question');
//let question = "what is your name";
// console.log(question);Your 



  // in array form:


const qs = [
    ["how are you", "getting better"],
    ["what is your name", "HAL"],
    ["How old are you","you do not want to know"],
    ["why are you here", "sorry...that question needs pondering"]
   ];

   findmatch(question);

function findmatch(pattern){
    for(let i = 0; i<qs.length; i++){
        if(qs[i][0].search(pattern)!=-1){
            console.log("You Asked: "+qs[i][0]);
            alert(qs[i][1]);
        }
    }

    
    
    // for(let o of qs) {
    //     //console.log(qs);
    //     let match = string.indexOf(pattern);
    //     if( match != -1){
    //         return o
    //     }
        
    // }
}






/*function checkAnswer(q) {
   // logic

    for (let o of qs) {
        if (o[0] == q) {
        return o[1];
    }
    }
}
  
function checkAnswer(q) {
    // logic
 
     for (let o of qs) {
        findmatch(q, "your name")
         if (o[0] == q) {
         return o[1];
     }
     }
 }



  let ans = checkAnswer(question);
  console.log(ans);
  */