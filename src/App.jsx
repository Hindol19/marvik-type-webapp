import React, { useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";

const App = () => {
  const Brain = "./assets/brain2/scene.gltf";
  useEffect(() => {
    console.log("RUNNING");
    // BASE
    const canvas = document.querySelector("canvas.webgl");

    // SCENE
    const scene = new THREE.Scene();

    // TEST CUBE
    // const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 1);
    // const cubeMaterial = new THREE.MeshBasicMaterial({
    //   color: 0xff0000,
    // });
    // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // scene.add(cube);

    //GLTF LOADER
    let donut = null;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(Brain, (gltf) => {
      donut = gltf.scene;

      donut.position.x = 1.6;
      // donut.position.y = -0.7;
      // donut.rotation.x = Math.PI * 0.2;
      donut.rotation.y = -Math.PI * 0.3;
      // donut.rotation.z = Math.PI * 0;
      // donut.rotation.z = Math.PI * 0.15;

      const radius = 1.5;
      donut.scale.set(radius, radius, radius);
      scene.add(donut);
    });

    // SCROLL:
    const transformDonut = [
      {
        rotationZ: 0,
        rotationY: -Math.PI * 0.3,
        // rotationX: 0,
        positionX: 1.6,
      },
      {
        rotationZ: -0.4,
        rotationY: 0.9,
        // rotationX: 0,
        positionX: -1.8,
      },
      {
        // rotationZ: 0.0314,
        rotationZ: 0,
        rotationY: 0.0314,
        // rotationX: 0,
        positionX: 0,
      },
      {
        // rotationZ: 0.0314,
        rotationZ: 0,
        rotationY: 0.0314,
        // rotationX: 0,
        positionX: 0,
      },
    ];

    let scrollY = window.scrollY;
    let currentSection = 0;
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      const newSection = Math.round(scrollY / sizes.height);
      console.log(newSection);

      if (newSection != currentSection) {
        currentSection = newSection;

        if (!!donut) {
          gsap.to(donut.rotation, {
            duration: 1,
            ease: "power2.inOut",
            z: transformDonut[currentSection]?.rotationZ,
          });
          gsap.to(donut.rotation, {
            duration: 1,
            ease: "power2.inOut",
            y: transformDonut[currentSection]?.rotationY,
          });

          gsap.to(donut.position, {
            duration: 1,
            ease: "power2.inOut",
            x: transformDonut[currentSection]?.positionX,
          });
        }
      }
    });

    // ON RELOAD =>
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

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

    // LIGHT
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 2, 0);
    scene.add(directionalLight);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // renderer.render(scene, camera);

    // ANIMATE
    const clock = new THREE.Clock();
    let lastElapsedTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - lastElapsedTime;
      lastElapsedTime = elapsedTime;

      if (!!donut) {
        donut.position.y = Math.sin(elapsedTime * 0.5) * 0.1 - 0.8;
      }
      // cube.rotation.y = Math.sin(elapsedTime);
      // console.log("tick");
      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };
    tick();
  }, []);
  return (
    <div>
      {/* <canvas className="webgl"></canvas> */}
      <Header />
      <Home />
      <About />
      <Work />
      <Footer />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.146.0/three.min.js"></script>
      <script src="https://unpkg.com/three@0.146.0/examples/js/loaders/GLTFLoader.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
      {/* <script src="./js/script.js"></script> */}
    </div>
  );
};

export default App;
