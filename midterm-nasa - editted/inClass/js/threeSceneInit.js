export default function buildScene(){
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);
    let renderer = new THREE.WebGLRenderer();

    let amblight = new THREE.AmbientLight(0xffffff,0.7,100);
    let light = new THREE.DirectionalLight(0xffffff,1,100);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    lightOn(light);
    //spacebg();
    earth();
    scene.add(light,amblight);
}