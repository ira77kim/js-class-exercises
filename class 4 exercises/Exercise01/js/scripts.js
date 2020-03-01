

function rolling(){
    const dice = {

        sides: 12,
        roll: function() {
            return Math.ceil(Math.random()*dice.sides); 
        }
    }
    return dice;
}
let rollingdice1=new rolling;
let rollingdice2=new rolling;

console.log(rollingdice1.roll());
console.log(rollingdice1);
console.log(rollingdice2.roll());