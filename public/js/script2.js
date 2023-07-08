console.log("RUNNING");

// BASE
const canvas = document.querySelector("canvas.webgl");

// SCENE
const scene = new THREE.Scene();

// TEST CUBE
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// SIZES
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// CAMERA
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.z = 5;
scene.add(camera);

// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.render(scene, camera);
