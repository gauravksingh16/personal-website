import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import * as TWEEN from 'three/addons/libs/tween.module.js'

const canvas = document.getElementById('threed');
const sizes = {
    width: canvas.clientWidth,
    height: canvas.clientHeight,
};

let mixer;
const clock = new THREE.Clock();

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    powerPreference: "high-performance",
    antialias: true
});
renderer.shadowMap.enabled = true
renderer.setSize(sizes.width, sizes.height)

const scene = new THREE.Scene()

let camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 1, 1000)

camera.position.set(0,0,2)

let model
const loader = new GLTFLoader();
loader.load('model.glb', function(glb){
    model = glb.scene
    mixer = new THREE.AnimationMixer(glb.scene);
    if (glb.animations && glb.animations.length > 0) {
        const animation = mixer.clipAction(glb.animations[0]);
        animation.play();
    }
    scene.add(model)
    model.position.y = -1.5

    animate();
}, undefined, function(error){
    console.error(error)
})

const directionalLight = new THREE.DirectionalLight(0x7873f5, 1)
scene.add(directionalLight)
directionalLight.position.set(-20, 0, -20)
directionalLight.castShadow = true
directionalLight.shadow.camera.bottom = -12

const fillLight = new THREE.PointLight(0x88b2d9, 12, 6, 2)
fillLight.position.set(30,3,1.8)
scene.add(fillLight)

function animate(){
    if (mixer) {
        const delta = clock.getDelta();
        mixer.update(delta);
    }
    renderer.render(scene, camera)
    renderer.setAnimationLoop(animate)
}



// Add event listener for mousemove
window.addEventListener('mousemove', onMouseMove);

// Function to update cursorLight position based on mouse coordinates
function onMouseMove(event) {
    const mouseX = (event.clientX / sizes.width) * 2 - 1;
    const mouseY = -(event.clientY / sizes.height) * 2 + 1;

    // Set cursorLight position based on mouse coordinates
    const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position);
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    pos.z = 1;
    fillLight.position.copy(pos);

    // Adjust the rotation angle based on mouse X position
    const rotationAngle = mouseX * Math.PI * 0.05; // You can adjust the factor to control the rotation speed

    // Rotate the camera or scene horizontally
    model.rotation.y = rotationAngle;
}

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.render(scene, camera)
});




