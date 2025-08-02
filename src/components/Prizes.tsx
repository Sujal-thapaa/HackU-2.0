import React, { useEffect, useRef, useState } from 'react';
import { Play, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// Define the new, darker color palette
const COLORS = {
  PRIMARY_BG: '#000000',
  PRIMARY_ACCENT: '#FF6849',
  SECONDARY_ACCENT: '#F6C177',
  SURFACE: '#1A1A1A',
  TEXT_MAIN: '#F1F1F1',
  TEXT_MUTED: '#B0B0B0',
  LINK_HOVER: '#FFD39A',
};

const MODEL_COLOR = '#00b4d8';

const Hero = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const animationRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 12);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(new THREE.Color(COLORS.PRIMARY_BG), 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0x404040, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 5, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight1 = new THREE.PointLight(new THREE.Color(MODEL_COLOR), 1.5, 100);
pointLight1.position.set(0, 2, 2);
scene.add(pointLight1);

const spotLight = new THREE.SpotLight(0xffffff, 1.0, 50, Math.PI / 6, 0.5);
spotLight.position.set(-3, 3, 3);
scene.add(spotLight);

const pointLight2 = new THREE.PointLight(new THREE.Color(COLORS.PRIMARY_BG), 0.8, 30);
pointLight2.position.set(3, -2, 1);
scene.add(pointLight2);

const directionalLight = new THREE.DirectionalLight(new THREE.Color(MODEL_COLOR), 0.8);
directionalLight.position.set(-5, 0, -5);
scene.add(directionalLight);

const pointLight3 = new THREE.PointLight(new THREE.Color(MODEL_COLOR), 0.8, 40);
pointLight3.position.set(0, 0, 3);
scene.add(pointLight3);

const lightGroup = new THREE.Group();
lightGroup.add(pointLight1, spotLight, pointLight2, directionalLight, pointLight3);
scene.add(lightGroup);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const modelTexture = textureLoader.load(
      '/_0731232307_texture.png',
      undefined,
      undefined,
      (error) => console.error('Error loading model texture:', error)
    );

    // Load FBX model
    const loader = new FBXLoader();
    loader.load(
      '/_0731232307_texture.fbx',
      (object) => {
        const box = new THREE.Box3().setFromObject(object);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        const maxDimension = Math.max(size.x, size.y, size.z);
        const scale = 8 / maxDimension;
        object.scale.setScalar(scale);

        object.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.map = modelTexture;
              child.material.transparent = true;
              child.material.opacity = 0.9;
              child.material.emissive = new THREE.Color(MODEL_COLOR);
              child.material.emissiveIntensity = 0.3;
              child.material.needsUpdate = true;
            }
          }
        });

        modelRef.current = object;
        scene.add(object);

        // Adjust camera
        const finalBox = new THREE.Box3().setFromObject(object);
        const maxSize = Math.max(...Object.values(finalBox.getSize(new THREE.Vector3())));
        const distance = maxSize * 2;
        camera.position.set(0, distance * 0.3, distance);
        camera.lookAt(0, 0, 0);

        setIsLoading(false);
      },
      undefined,
      (error) => {
        setIsLoading(false);
        // Add fallback geometry
        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color(MODEL_COLOR),
          transparent: true,
          opacity: 0.8,
          emissive: new THREE.Color(MODEL_COLOR),
          emissiveIntensity: 0.2
        });
        const sphere = new THREE.Mesh(geometry, material);
        modelRef.current = sphere;
        scene.add(sphere);
      }
    );

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Mouse interaction - only on renderer domElement
    let isMouseDown = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseDown = (e) => {
      isMouseDown = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      mountRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown || !modelRef.current) return;
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      modelRef.current.rotation.y += deltaX * 0.01;
      modelRef.current.rotation.x += deltaY * 0.01;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      if (mountRef.current) mountRef.current.style.cursor = 'grab';
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: COLORS.PRIMARY_BG }}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse delay-300" style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full animate-ping delay-500" style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent animate-pulse"
              style={{
                backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
                fontFamily: 'var(--font-heading)'
              }}
            >
              United Hacks V6
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0"
              style={{
                color: COLORS.TEXT_MUTED,
                fontFamily: 'var(--font-body)'
              }}
            >
              The Ultimate Global Online Hackathon - Code. Create. Compete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start z-20 relative">
              <motion.a
                href="https://www.youtube.com/watch?v=p8CHaDP3Bxg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform flex items-center justify-center gap-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
                  boxShadow: `0 0 20px ${COLORS.PRIMARY_ACCENT}40`,
                  fontFamily: 'var(--font-body)',
                  zIndex: 30
                }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: `0 10px 30px ${COLORS.PRIMARY_ACCENT}80` }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} />
                Watch Trailer
              </motion.a>

              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehFwBX1yMcW1BjX-8XcC-vHnUgNE9Wv8iVvbSIO3361QneWg/viewform?pli=1&pli=1&pli=1&edit2=2_ABaOnucxaiQsOarIkNlEYleII0UX-lueNbcBAdyYHXPLfyUWP_s7iGIDg6UiFGUzpQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform flex items-center justify-center gap-2"
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.SECONDARY_ACCENT}, ${COLORS.PRIMARY_ACCENT})`,
                  boxShadow: `0 0 20px ${COLORS.SECONDARY_ACCENT}40`,
                  fontFamily: 'var(--font-body)',
                  zIndex: 30
                }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: `0 10px 30px ${COLORS.SECONDARY_ACCENT}80` }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus size={20} />
                Register Now
              </motion.a>
            </div>
          </div>

          {/* 3D Model */}
          <div className="lg:w-1/2 flex justify-center">
            <div
              ref={mountRef}
              className="model-container relative"
              style={{
                width: '600px',
                height: '600px',
                cursor: 'grab',
                zIndex: 5
              }}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center rounded-lg" style={{ backgroundColor: `${COLORS.PRIMARY_BG}80` }}>
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: MODEL_COLOR }}></div>
                    <p style={{ color: MODEL_COLOR, fontFamily: 'var(--font-body)' }}>Loading 3D Model...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;