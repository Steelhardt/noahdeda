"use client"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
/*
Copy pasted the code from medium still need to finish reading the official 3js docs below
-https://medium.com/@claude.ando/integrating-three-js-with-next-js-and-typescript-81f47730103e
-https://threejs.org/manual/#en/fundamentals

*/

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;
      // Add this inside the useEffect hook after initializing the renderer
    if (typeof window !== 'undefined') {
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

    // Render the scene and camera
      renderer.render(scene, camera);

     // Add this function inside the useEffect hook
    const renderScene = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(renderScene);
    };

    // Call the renderScene function to start the animation loop
    renderScene();
    }


    
    }
    
  }, []);
  return <div ref={containerRef} />;
};
export default ThreeScene;