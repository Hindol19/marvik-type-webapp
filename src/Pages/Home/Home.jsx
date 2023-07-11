import React, { useEffect } from "react";
import Landing from "../../components/HomeComponents/Landing/Landing";
import About from "../../components/HomeComponents/About/About";
import Services from "../../components/HomeComponents/Services/Services";
import Testimonials from "../../components/HomeComponents/Testitmonials/Testimonials";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
// import SimpleSlider from "../../components/HomeComponents/Testitmonials/Testimonials";
const tests = [
  {
    heading: "Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas neque ratione, atque quod excepturi commodi enim a explicabo eveniet non.",
  },
  {
    heading: "Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas neque ratione, atque quod excepturi commodi enim a explicabo eveniet non.",
  },
  {
    heading: "Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas neque ratione, atque quod excepturi commodi enim a explicabo eveniet non.",
  },
  {
    heading: "Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas neque ratione, atque quod excepturi commodi enim a explicabo eveniet non.",
  },
];
const Home = ({ landingContent }) => {
  const Brain = "./assets/earth/scene.glb";
  useEffect(() => {
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
      donut.position.x = 1.5;
      // donut.position.y = 1.9;
      donut.rotation.y = -Math.PI * 0.3;
      const radius = 1;
      donut.scale.set(radius, radius, radius);
      scene.add(donut);
    });

    // SCROLL:
    const transformDonut = [
      {
        rotationZ: 0,
        rotationY: -Math.PI * 0.3,
        positionX: 1.5,
      },
      {
        rotationZ: -0.4,
        rotationY: 0.9,
        positionX: -1.8,
      },
      {
        rotationZ: 0,
        rotationY: 0.0314,
        positionX: 0,
      },
      {
        rotationZ: 0,
        rotationY: 0.0314,
        positionX: 0,
      },
    ];

    let scrollY = window.scrollY;
    let currentSection = 0;
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
      const newSection = Math.round(scrollY / sizes.height);
      // console.log(newSection);

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
        donut.position.y = Math.sin(elapsedTime * 0.5) * 0.1 - 0.2;
      }
      // cube.rotation.y = Math.sin(elapsedTime);
      // console.log("tick");
      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <div className="home-container">
      <canvas className="webgl">I EXIST</canvas>
      <Landing landingContent={landingContent} isHome={true} />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
