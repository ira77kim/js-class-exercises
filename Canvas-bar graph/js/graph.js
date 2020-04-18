let data = [
    {name: "The Bronx", count: 89.8, color: "#FF3636"},
    {name: "Manhattan", count: 91.1, color: "#366CFF"},
    {name: "Queens", count: 92.8, color: "#FF6B4B"},
    {name: "Brooklyn", count: 91.6, color: "#2FD8A7"},
    {name: "Staten Island", count: 89.8, color: "#E9AB17"}

];


const canvas = document.getElementById("bars");
let context = canvas.getContext("2d");
context.beginPath();
canvas.height=400;
context.fillStyle=200,200,200;
context.fill();

let w = canvas.width;
let h = canvas.height;
console.log(w +" , "+ h);


let bar = {};
let rate= {};
let b = {};
let color = {};

context.beginPath();
context.rect(20,20,w-40,h-40);
context.fillStyle="white";
context.fill();
for(let i=0;i<5 ; i++){
    context.beginPath();
    bar[i] = context.rect(120+w/7*i,h-150,20,-data[i].count);
    context.fillStyle = data[i].color;
    context.font="15px Arial"
    context.textAlign="center"
    rate[i]= context.fillText(data[i].count+"%",130+w/7*i,h-150-data[i].count-5);
    b[i]= context.fillText(data[i].name,130+w/7*i,h-130);
    context.fill();
    context.strokeStyle = "gray";
    context.stroke();

    
}
