// 7. Write a script that, on click of a button, can randomly 
// select an image from a list and insert it inside the section 
//tag in the html. eg. https://source.unsplash.com/random

/*

function loadImage(){
  //
  let source = "img/yoda0.jpeg";
  console.log(source);
  document.createElement('img').src="img/yoda2.jpg";
  img.src=source;
  document.getElementById("image").appendChild(img);

}
*/

function loadImage(){
  let source = "./js/img/yoda"+Math.floor(Math.random()*2)+".jpeg";
  let img=document.createElement('img');

  img.src = source;
  document.getElementById("image").appendChild(img)
}




// let randomImg;
// let bgcolor = document.getElementById("2");
// bgcolor.style.backgroundColor="pink";

// let Button = document.createElement("button");
// Button.innerHTML=" !NEW IMAGE! ";

// let body=document.getElementsByTagName("body")[0];
// body.appendChild(Button);

// //let IMG = document.createElement

// Button.addEventListener ("Click", loadImage());
// function loadImage(){
//   alert("did");
// }



// randomImg = getElementsByTagName("section");
// randomImg.style.backgroundColor="pink";
