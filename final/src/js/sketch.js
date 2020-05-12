

console.log(window.innerWidth);
console.log(window.innerHeight);
//setting up scene
let scene = new THREE.Scene();
scene.background = new THREE .Color(0,0.1,0.2);



let camera = new THREE.PerspectiveCamera(50,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 4;
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.65, window.innerHeight*0.74);
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

document.body.appendChild(renderer.domElement);

//material

//colors
let colorBlue = new THREE.Color(220,220,255);
let colorWhite = new THREE.Color(255,255,255);
//materials
let materialBlue = new THREE.MeshPhongMaterial({color:0xa0e0ff});
let materialWhite = new THREE.MeshPhongMaterial({color:0xd0cdff});
materialWhite.transparent=true;
materialWhite.opacity=0.8;


let scale = 1;

//Prism
let prismGeometry = new THREE.CylinderGeometry(0.3,0.3,0.1,6);
let prism = new THREE.Mesh(prismGeometry,materialBlue);
prism.position.set(0,0,0);

//thin Plate
let plateGeometry1 = new THREE.CylinderGeometry(0.7,1,0.05,6);
let plateGeometry2 = new THREE.CylinderGeometry(1,0.7,0.05,6);
let hex1 = new THREE.Mesh(plateGeometry1);
let hex2 = new THREE.Mesh(plateGeometry2);
   //position set
hex1.position.set(0,0.025,0);
hex2.position.set(0,-0.025, 0);
   //mergging
let plate = new THREE.Geometry();
hex1.updateMatrix();
hex2.updateMatrix();
plate.merge(plateGeometry1, hex1.matrix);
plate.merge(plateGeometry2, hex2.matrix);
let thinplatemesh = new THREE.Mesh(plate,materialWhite);

//solid plate
let plateGeometry3 = new THREE.CylinderGeometry(1,1,0.1,6);
let solidplatemesh = new THREE.Mesh(plateGeometry3,materialWhite);

//sectered plate = 6 small plate + big plate
let splateGeometry1={};
let splateGeometry2={};
let splateGeo={};
let bplateGeometry1=new THREE.CylinderGeometry(0.5,0.7,0.04,6);
let bplateGeometry2=new THREE.CylinderGeometry(0.7,0.5,0.04,6);
let bplateGeometry3=new THREE.Geometry();
let splateMesh1={};
let splateMesh2={};
let splateMesh3={};
let bplateMesh1=new THREE.Mesh(bplateGeometry1,materialWhite);
bplateMesh1.position.y=0.02;
bplateMesh1.updateMatrix();
let bplateMesh2=new THREE.Mesh(bplateGeometry2,materialWhite);
bplateMesh2.position.y=-0.02;
bplateMesh2.updateMatrix();
bplateGeometry3.merge(bplateMesh1.geometry,bplateMesh1.matrix);
bplateGeometry3.merge(bplateMesh2.geometry,bplateMesh2.matrix);
let bplateMesh3 = new THREE.Mesh(bplateGeometry3,materialWhite);
let secteredGeo = new THREE.Geometry();
let secteredMesh={};
let secteredPGeo = new THREE.Geometry();

for(let i =0; i<6;i++){
   splateGeometry1[i]=new THREE.CylinderGeometry(0.1,0.3,0.02,6);
   splateGeometry2[i]=new THREE.CylinderGeometry(0.3,0.1,0.02,6);
   splateGeo[i]=new THREE.Geometry();
   splateMesh1[i]=new THREE.Mesh(splateGeometry1[i]);
   splateMesh1[i].position.y=0.01;
   splateMesh1[i].updateMatrix();
   splateMesh2[i]=new THREE.Mesh(splateGeometry2[i]);
   splateMesh2[i].position.y=-0.01;
   splateMesh2[i].updateMatrix();
   splateGeo[i].merge(splateMesh1[i].geometry,splateMesh1[i].matrix);
   splateGeo[i].merge(splateMesh2[i].geometry,splateMesh2[i].matrix);
   splateMesh3[i]= new THREE.Mesh(splateGeo[i], materialWhite);
   splateMesh3[i].position.x=0.8;
   splateMesh3[i].updateMatrix();
   
   secteredGeo.merge(splateMesh3[i].geometry,splateMesh3[i].matrix);
   secteredMesh[i] = new THREE.Mesh(secteredGeo,materialWhite);
   secteredMesh[i].rotation.y=1.047*i;
   secteredMesh[i].updateMatrix();
   secteredPGeo.merge(secteredMesh[i].geometry,secteredMesh[i].matrix);
}
let sectedplates = new THREE.Mesh(secteredPGeo,materialWhite);
//scene.add(sectedplates);
bplateMesh3.geometry.merge(sectedplates.geometry,sectedplates.matrix);



//needles
let long={};
let need={};
let needles=new THREE.Geometry();
let needlesmesh;
for(let i =0;i<3;i++){
   long[i]=new THREE.CylinderGeometry(0.05,0.05,1.5,6);
   need[i]= new THREE.Mesh(long[i],materialWhite);
   if(i==0){
      need[i].position.set(0,0,0);
   }
   else if(i==1){
      need[i].position.set(0.05,-0.1,0.1);
   }
   else{
      need[i].position.set(0.08,0.2,0);
   }
   need[i].updateMatrix();
   needles.merge(long[i], need[i].matrix);
}
needlesmesh=new THREE.Mesh(needles,materialWhite);
   // needlesmesh.scale.set(0.5,0.5,0.5);
needlesmesh.scale.set(scale,scale,scale);

//dendrite = prism + needle *6 + needle *24
let baseGeo = new THREE.CylinderGeometry(0.12,0.12,0.1,6); 
let basemesh = new THREE.Mesh(baseGeo,materialWhite);
basemesh.rotation.set(1.5,0,1.5);
basemesh.updateMatrix();
let smallbranch1 = {};
let smallbranch2 = {};
let vpivot
let mainbranchGeo= new THREE.Geometry(); 
let stick ={};
let sticksmesh={}; 
let pivot={};
// Vs
smallbranch1Geo=new THREE.CylinderGeometry(0.01,0.02,0.1,6);
smallbranch2Geo=new THREE.CylinderGeometry(0.01,0.02,0.1,6);


//branch
for(i=0; i<6;i++){
   stick[i]=new THREE.CylinderGeometry(0.02,0.04,0.5,6);
   sticksmesh[i] = new THREE.Mesh(stick[i]);

   sticksmesh[i].position.y=0.4;
   sticksmesh[i].updateMatrix();
   
   pivot=new THREE.Geometry();
   pivot.merge(sticksmesh[i].geometry,sticksmesh[i].matrix);

   pivotmesh = new THREE.Mesh(pivot,materialWhite);
   pivotmesh.rotation.x=1.047*i;
   pivotmesh.updateMatrix();

   mainbranchGeo.merge(pivotmesh.geometry, pivotmesh.matrix);
   mainbranchGeo.merge(basemesh.geometry, basemesh.matrix);
   
}
let mainbranchmesh = new THREE.Mesh(mainbranchGeo,materialWhite);

//column
let columnGeo = new THREE.CylinderGeometry(0.6,0.6,1,6);
let columnmesh = new THREE.Mesh(columnGeo,materialWhite);

//capped column
let capGeo = new THREE.CylinderGeometry(0.8,0.8,0.05,6);
let midGeo = new THREE.CylinderGeometry(0.5,0.5,1,6);
let capmesh1=new THREE.Mesh(capGeo,materialWhite);
let capmesh2=new THREE.Mesh(capGeo,materialWhite);
let midmesh=new THREE.Mesh(midGeo,materialWhite);
let capcolGeo = new THREE.Geometry();
capmesh1.position.set(0,0.55,0);
capmesh2.position.set(0,-0.55,0);
midmesh.position.set(0,0,0)
capmesh1.updateMatrix();
capmesh2.updateMatrix();
midmesh.updateMatrix();
capcolGeo.merge(capmesh1.geometry, capmesh1.matrix);
capcolGeo.merge(capmesh2.geometry,capmesh2.matrix);
capcolGeo.merge(midmesh.geometry,midmesh.matrix);
let capcolmesh = new THREE.Mesh(capcolGeo, materialWhite);

//hollow column
let ocGeo = new THREE.CylinderGeometry(0.6,0.6,1,6);
let ocMesh = new THREE.Mesh(ocGeo,materialWhite);
let icGeo = new THREE.CylinderGeometry(0.4,0.4,0.8,6);
let icMesh = new THREE.Mesh(icGeo,materialBlue);


//scene.add...
// scene.add(thinplatemesh);
// scene.add(solidplatemesh);
// scene.add(bplateMesh3);
// scene.add(prism);
// scene.add(needlesmesh);
// scene.add(columnmesh);
// scene.add(capcolmesh);
// scene.add(ocMesh,icMesh);
// scene.add(mainbranchmesh);

let randomspeed = Math.random()*3
console.log("random wind speed : "+randomspeed);
let increase=0.1;
let startpointX = 0;
let startpointY = 2;
let startpointZ = -2;

function animate() {
     requestAnimationFrame(animate);

     activate(prism); //prism
     activate(thinplatemesh); // thin plate
     activate(solidplatemesh); //solid plate
     activate(bplateMesh3); // sectered plate
     activate(needlesmesh); // needle
     activate(columnmesh); // column
     activate(capcolmesh); // cappedcolumn
     activate(mainbranchmesh); //dendrite
     activate(ocMesh); //hollow column ocMesh &icMesh
     activate(icMesh); // hollow column

   renderer.render(scene, camera);
   renderer.shadowMap.enabled=true;
   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
 }

 animate();

///////////////////////////////////////////
///////////////////////////////////////////
 let loc = document.getElementById("displayloc");

 getLoc();
 function getLoc(){
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(longlat);
    }
    else{
       loc = "Geolocation not allowed"
    }
 }
 function longlat (position){
   let latitude;
   let longitude;
    loc.innerHTML = "Latitude : "+position.coords.latitude+ "<br>Longitude : "+position.coords.longitude;
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;
   document.getElementById("displayloc").value=position.coords.latitude;

    console.log(position.coords.latitude + " , " +position.coords.longitude);
    console.log("this"+latitude+longitude);
   getWeather(latitude,longitude);
   }

 //lat, long to weather
let speed;

function getWeather(lat,lon){
 let apiKey = "6cf041f63a53276be7f9be31ba5612fa";
 let url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+apiKey;
 fetch(url)      
  .then(function(response) {        
    return response.json();      
  })      
  .then(function(resp) {        
    speed=resp.wind.speed;
    console.log(windspeed);
    setSpeed(resp.wind.speed);
    
  })      
  .catch(function(resp) {      
    console.log("There was an error: "+resp);      
  });   
}

function setSpeed(x){
   speed=x;
   console.log(" new speed : "+speed);
   // return speed;
   document.getElementById("windspeed").innerHTML="Windspeed : "+speed+"mps";
   
}
   console.log(speed);

let windspeed=document.getElementById("windspeed").value;
console.log("real"+windspeed)

//setting up temp range slider into realtime input
 let setTemp=document.getElementById("temp");
 let inputTemp=0;
 setTemp.addEventListener("input", function t(){
    inputTemp= this.value;
    //console.log(inputTemp);
    document.getElementById("instanttemp").innerHTML="-"+inputTemp+"°C";
});
 
 //setting up humidity range slider into realtime input
 let setHumi=document.getElementById("humid"); 
 let inputHumi=0;
 setHumi.addEventListener("input", function h(){
    inputHumi= setHumi.value;
    document.getElementById("instanthumi").innerHTML=inputHumi+"g/m3"
 });
 let displayT = document.getElementById("displaytemp");
 let displayH = document.getElementById("displayhumi");
 
 let snowflakeType;

setTemp.addEventListener("change", snowflakeSwitch);
setHumi.addEventListener("change", snowflakeSwitch);




function snowflakeSwitch () {
   reset();
   console.log(inputTemp, inputHumi);
   if(inputTemp>=0 && inputTemp<=3.5 && inputHumi<=0.5){
      console.log("Prisms");
      snowflakeType=0;
      scene.add(prism);
      info("Prism",text1);
   }
   //1.2
   else if(inputTemp >=0 && inputTemp<=3.5 && inputHumi>0.5){
      
      let first=Math.floor(Math.random()*2);
      if(first ==0){
         console.log("Thin plates");
         snowflakeType=1;
         scene.add(thinplatemesh);
         info("Thin Plate",text2);
      }
      else{
         snowflakeType=2;
         console.log("Dendrites");
         scene.add(mainbranchmesh);
         info("Dendrite",text3);
      }
      //console.log("Thin plates & Dendrites");
   }
   //2.1
   else if(inputTemp > 3.5 && inputTemp<=10 && inputHumi<=1.2){
      let second=Math.floor(Math.random()*2);
      if(second ==0){
         console.log("Solid columns");
         scene.add(columnmesh);
         info("Solid Column",text4);
      }
      else{
         scene.add(ocMesh,icMesh);
         console.log("Hollow columns");
         info("Hollow Column",text5);
      }
      //console.log("Solid columns & Hollow columns");   
   }
   //2.2
   else if(inputTemp > 3.5 && inputTemp<=10 && inputHumi>1.2){
      let third=Math.floor(Math.random()*2);
      if(third ==0){
         console.log("Hollow columns");
         scene.add(ocMesh,icMesh);
         info("Hollow Column",text5);
      }
      else{
         console.log("Needles");
         scene.add(needlesmesh);
         info("Needle",text6);
      }
      //console.log("Hollow columns & Needles");
   }
   else if(inputTemp > 10 && inputTemp<=22 && inputHumi<=1.4){
      let fourth=Math.floor(Math.random()*2);
      if(fourth ==0){
         console.log("Thin plates");
         scene.add(thinplatemesh);
         info("Thin Plate",text2);
      }
      else{
         console.log("Solid plates");
         scene.add(solidplatemesh);
         info("Solid Plate",text7);
      }
      // console.log("Thin plates & Solid plates");
   }
   else if(inputTemp > 10 && inputTemp<=22 && inputHumi>1.4){
      let fifth=Math.floor(Math.random()*2);
      if(fifth ==0){
         console.log("Sectered plates");
         scene.add(bplateMesh3);
         info("Sectered Plate",text8);
      }
      else{
         console.log("dendrite");
         scene.add(mainbranchmesh);
         info("Dendrite",text3);
      }
      //console.log("Sectered Plates & Dendrites");   
   }
   else if(inputTemp > 22 && inputTemp<=40 && inputHumi<=0.1){
      let sixth=Math.floor(Math.random()*2);
      if(sixth ==0){
         console.log("Thin plates");
         scene.add(thinplatemesh);
         info("Thin Plate",text2);
      }
      else{
         console.log("Solid plates");
         scene.add(solidplatemesh);
         info("Solid Plate",text7);
      }
      //console.log("Thin plates & Solid plates");   
   }
   else if(inputTemp >22 && inputTemp <= 40 && inputHumi>0.1){
      let seventh=Math.floor(Math.random()*3);
      if(seventh ==0){
         console.log("Hollow Columns");
         scene.add(ocMesh,icMesh);
         info("Hollow Column",text5);
      }
      else if(seventh == 1){
         console.log("Solid Columns");
         scene.add(columnmesh);
         info("Solid Column",text4);
      }
      else{
         console.log("capped columns")
         scene.add(capcolmesh);
         info("Capped Column",text9);
      }
      //console.log("Hollow Columns & Solid Colums & Capped Columns");
   }
   if(inputTemp==null){
      inputTemp = 0;
      displayT.innerHTML="Temperature : 0 °C";
      console.log("hi");
   }
   if(inputHumi==undefined){
      inputHumi = 0;
      displayH.innerHTML="Humidity : 0 g/m3";
   }
}

function reset(){
   scene.remove(prism,thinplatemesh,solidplatemesh,bplateMesh3,needlesmesh,columnmesh, capcolmesh,ocMesh,icMesh,mainbranchmesh);
}

//animation functions
 
function activate(s){
   rotate(s);
   //increment(s);
   fall(s);
}
function rotate(s){
   s.rotation.x +=0.01*randomspeed;
   s.rotation.y +=0.01*randomspeed;
   s.rotation.z -=0.01*randomspeed;
}
function increment(s){
  if(increase<=1.2){
     increase+=0.01;
  }
  else{
     increase=1.2;
  }
  s.scale.set(increase,increase,increase);
}
function fall(s){
  if(startpointY>=0){
    startpointY-=0.001;
  }
  else{
     startpointY=0;
  }
  if(startpointZ<=0){
     startpointZ+=0.03;
  }
  else{
     startpointz=0;
  }
  s.position.x = startpointX;
  s.position.y = startpointY;
  s.position.z = startpointZ;
}

// texts
let text1 = "Snow crystals first grow as simple hexagonal prisms that develops into either plates or columns.";
let text2 = "Thin plates are six-sided and flat. The plates may be simple hexagons or patterned. Among the thin plates, in temperature around -15 are more large than those that forms in warmer temperature.";
let text3 = "Dendrites are the six sided branchs shapes that most people relate with snowflakes. In lower temperature, the dendrite chrystals form in larger shape with more side branches. Fernlike-dendrites sometimes appear.";
let text4 = "Simple prisms can turn into hexagonal columns shaped a lot like wooden pencils. They can be short and squat or long and thin. Length varies.";
let text5 = "Hexagonal columns often form with conical hollow regions in their ends, and such forms are called hollow columns.";
let text6 = "The needles may be solid, hollow, or partially hollow and tend to form needle shapes.";
let text7 = "As no two snow chrystals are alike, solid plates, which has characteristics of both thin plates and columns appear as well. These chrystals can also be simple or patterned.";
let text8 = "Sectered plates are formed through branching from thin plates, and in fact, are more common than the simple hexagons.";
let text9 = "In temperatures below -22°C, plates grow on the ends of the columns.";

document.getElementById("description").innerHTML="You have not made a snowflake yet.";

function info(x,y){
   document.getElementById("displaysnowflaketype").innerHTML="Type : "+x;
   document.getElementById("description").innerHTML=y;
}