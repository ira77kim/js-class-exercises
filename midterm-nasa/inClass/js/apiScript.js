//statement 1
document.getElementById("Output").innerHTML = "Use YYYY-MM-DD format";
document.getElementById("Outputnames").innerHTML= "to search the near-Earth-objects on the date.";
/////////////////////////////////////

// three.js scene building
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);
let renderer = new THREE.WebGLRenderer();

let amblight = new THREE.AmbientLight(0xffffff,0.2,100);
scene.add(amblight);
let light = new THREE.DirectionalLight(0xffffff,1,100);
light.position.set(5,5,5);
light.castShadow = false;
scene.add(light);

light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;    // default
light.shadow.camera.far = 500;     // default

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//spacebg();
earth();
///////////////////////////////////
// main variables
const ask = "https://api.nasa.gov/neo/rest/v1/feed?";
let sampleDate = "1992-09-26";

let apiKey = "p3KaIaY4YbAjnNz44dOvP4NEvurcRUvTJW9K9Ylz";
let url;
let array={};

//parameters
let names=[];
let velocities =[];

//search button
let button = document.getElementById("search");
//when button is clicked, getdata()
button.addEventListener("click", getData);

//get data is....
function getData() {  

  let submission = document.getElementById("space").elements.item(0).value;
  console.log(submission);

  let start = "start_date="+submission;
  let end ="end_date="+submission;
  
  //putting together main variables
  url = ask + start +"&"+end +"&"+"api_key="+apiKey;  
   
  fetch(url)      
  .then(function(response) {        
    return response.json();      
  })      
  .then(function(resp) {        
    array=resp.near_earth_objects[submission];
    console.log(array);
    
    for(let i=0; i<array.length; i++){
      console.log(array[i].name);
      names.push(array[i].name);
      velocities.push(array[i].close_approach_data[0].relative_velocity.kilometers_per_second/10);
      console.log(velocities[i]);
      
      fly(i);
      let counter=0;
      counter+=i;
      console.log(counter);
    }
   
    document.getElementById("Output").innerHTML = "We've found some near-Earth-object(s) ";
    document.getElementById("Outputnames").innerHTML=names;
  })      
  .catch(function(resp) {      
    console.log("There was an error: "+resp);      
  });  
}

//space
function spacebg(){
  let spacegeometry  = new THREE.SphereGeometry(300, 32, 32);
  let spacetexture = new THREE.TextureLoader().load('images/galaxy_starfield.png');
  let spacematerial  = new THREE.MeshBasicMaterial({map:spacetexture});
  spacematerial.side  = THREE.BackSide
  let spaceMesh  = new THREE.Mesh(spacegeometry, spacematerial)
  spaceMesh.position.z=-100;
  scene.add(spaceMesh);
  
  function animate(){
    requestAnimationFrame(animate);    
    renderer.render(scene, camera);
  }
  animate();
}

//earth
function earth() {
  let earthgeometry   = new THREE.SphereGeometry(80, 32, 32);
  let earthtexture = new THREE.TextureLoader().load('images/earthmap1k.jpg');
  let earthmaterial  = new THREE.MeshPhongMaterial({map: earthtexture});
  earthmaterial.bumpScale = 20;
  let earthMesh = new THREE.Mesh(earthgeometry, earthmaterial);
  scene.add(earthMesh);
  earthMesh.position.x=0;
  earthMesh.position.y=-1;
  earthMesh.position.z=-400;
  earthMesh.rotation.x=0.5;
  earthMesh.rotation.y=0.5;
  
  function animate(){
    requestAnimationFrame(animate);
    earthMesh.rotation.y+=0.01;
    
    renderer.render(scene, camera);
  }
  animate();
}

//choose color, make asteroids,
function fly(n){
  // let diameterScale = Math.ceil(array[n].estimated_diameter.kilometers.estimated_diameter_max*10);
  let diameterScale = Math.ceil(array[n].absolute_magnitude_h);
  
  //color
  let colorR = Math.floor(Math.random()*255);
  let colorG = Math.floor(Math.random()*255);
  let colorB = Math.floor(Math.random()*255);
  let colorcall = "rgb("+colorR+","+colorG+","+colorB+")";
  let randomColor = new THREE.Color(colorcall);
  
  //fixing geometry
  let asteroidshape = new THREE.SphereGeometry(diameterScale, 6,6);
  let asteroidmaterial = new THREE.MeshLambertMaterial( {color: randomColor, wireframe:false}); 
  let asteroid ={}= new THREE.Mesh( asteroidshape, asteroidmaterial );
  scene.add( asteroid );
  
  //position
  asteroid.position.x=0-(n*40);
  asteroid.position.y=0;
  asteroid.position.z=0;
  console.log("at"+n);
  if(n%2!=0){
    asteroid.position.y=100;
  }
  else{
    asteroid.position.y=-100;
  }

  function animate(){
    requestAnimationFrame(animate);
    asteroid.rotation.x +=0.01;
    asteroid.rotation.y +=0.01;
    asteroid.rotation.z +=0.01;
    asteroid.position.z -=0.2*velocities[n];

    if(asteroid.position.z<=-250){
      asteroid.position.x +=1;
      asteroid.position.z -=0.1*velocities[n];
      if(asteroid.position.x>=100){
        asteroid.position.x +=0.5
        asteroid.position.z +=0.2*velocities[n];
      }
    }
    //console.log("this"+ n+ " "+velocities[n]);
    renderer.render(scene, camera);
    renderer.shadowMap.enabled=true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
  animate();
  }