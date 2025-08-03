import { useEffect, useRef, useState } from 'react';
import { Play, UserPlus } from 'lucide-react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// Define the new, darker color palette
const COLORS = {
  PRIMARY_BG: '#0E0B16',        // Dark Plum
  PRIMARY_ACCENT: '#9370DB',    // Medium Purple
  SECONDARY_ACCENT: '#D8BFD8',  // Thistle
  SURFACE: '#1A162B',           // Deeper Plum
  TEXT_MAIN: '#E0E0E0',         // Soft White
  TEXT_MUTED: '#BDBDBD',        // Light Gray
  LINK_HOVER: '#B799FF',        // Vibrant Violet
  ERROR_WARNING: '#D9534F'      
};

// Define a separate color for the 3D model
const MODEL_COLOR = '#00b4d8';

const Hero = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const animationRef = useRef<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

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
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Light blue accent light for the 3D model
    const pointLight = new THREE.PointLight(new THREE.Color(MODEL_COLOR), 1.5, 100); 
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    const accentLight1 = new THREE.SpotLight(0xffffff, 1.0, 50, Math.PI / 6, 0.5);
    accentLight1.position.set(-3, 3, 3);
    scene.add(accentLight1);

    const accentLight2 = new THREE.PointLight(new THREE.Color(COLORS.PRIMARY_BG), 0.8, 30);
    accentLight2.position.set(3, -2, 1);
    scene.add(accentLight2);
    
    // Light blue rim light
    const rimLight = new THREE.DirectionalLight(new THREE.Color(MODEL_COLOR), 0.8);
    rimLight.position.set(-5, 0, -5);
    scene.add(rimLight);
    
    // Light blue holographic glow effect
    const glowLight = new THREE.PointLight(new THREE.Color(MODEL_COLOR), 0.8, 40);
    glowLight.position.set(0, 0, 3);
    scene.add(glowLight);

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
              child.material.emissive = new THREE.Color(MODEL_COLOR); // Light blue for emissive
              child.material.emissiveIntensity = 0.3;
              child.material.needsUpdate = true;
            }
          }
        });

        modelRef.current = object;
        scene.add(object);
        
        const finalBox = new THREE.Box3().setFromObject(object);
        const finalSize = finalBox.getSize(new THREE.Vector3());
        const maxSize = Math.max(finalSize.x, finalSize.y, finalSize.z);
        
        const distance = maxSize * 2;
        camera.position.set(0, distance * 0.3, distance);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
        
        setIsLoading(false);
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100, '%');
      },
      (error) => {
        console.error('Error loading FBX model:', error);
        setIsLoading(false);
        
        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const material = new THREE.MeshPhongMaterial({ 
          color: new THREE.Color(MODEL_COLOR), // Light blue color
          transparent: true,
          opacity: 0.8,
          emissive: new THREE.Color(MODEL_COLOR), // Light blue for glow
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

    // Handle mouse movement for interactive rotation
    let isMouseDown = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      if (mouseX >= rect.left && mouseX <= rect.right && 
          mouseY >= rect.top && mouseY <= rect.bottom) {
        isMouseDown = true;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown || !modelRef.current) return;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - lastMouseX;
      const deltaY = mouseY - lastMouseY;
      
      modelRef.current.rotation.y += deltaX * 0.01;
      modelRef.current.rotation.x += deltaY * 0.01;
      
      lastMouseX = mouseX;
      lastMouseY = mouseY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: COLORS.PRIMARY_BG }}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: COLORS.PRIMARY_ACCENT }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse delay-300" style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full animate-ping delay-500" style={{ backgroundColor: COLORS.SECONDARY_ACCENT }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent animate-pulse text-center lg:text-left"
              style={{ 
                backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
                fontFamily: 'var(--font-heading)'
              }}
            >
              United Hacks V6
            </h1>

            <p 
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left px-4 sm:px-0" 
              style={{ 
                color: COLORS.TEXT_MUTED,
                fontFamily: 'var(--font-body)'
              }}
            >
              The Ultimate Global Online Hackathon - Code. Create. Compete.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 px-4 sm:px-0">
              {/* Buttons moved directly below the title */}
              {/* Watch Trailer Button */}
              <button
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 animate-fadeInUp text-sm sm:text-base"
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.PRIMARY_ACCENT}, ${COLORS.SECONDARY_ACCENT})`,
                  boxShadow: `0 0 20px ${COLORS.PRIMARY_ACCENT}40`,
                  fontFamily: 'var(--font-body)',
                  animationDelay: '0.3s',
                  animationFillMode: 'both'
                }}
                onClick={() => {
                  window.open('https://www.youtube.com/watch?v=p8CHaDP3Bxg', '_blank', 'noopener,noreferrer');
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px ${COLORS.PRIMARY_ACCENT}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.PRIMARY_ACCENT}40`;
                }}
              >
                <div className="transform transition-transform duration-300 group-hover:rotate-360">
                  <Play size={18} className="sm:w-5 sm:h-5" />
                </div>
                Watch Trailer
              </button>

              

              {/* Register Button */}
              <button
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 animate-fadeInUp text-sm sm:text-base"
                style={{
                  backgroundImage: `linear-gradient(to right, ${COLORS.SECONDARY_ACCENT}, ${COLORS.PRIMARY_ACCENT})`,
                  boxShadow: `0 0 20px ${COLORS.SECONDARY_ACCENT}40`,
                  fontFamily: 'var(--font-body)',
                  animationDelay: '0.5s',
                  animationFillMode: 'both'
                }}
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSehFwBX1yMcW1BjX-8XcC-vHnUgNE9Wv8iVvbSIO3361QneWg/viewform', '_blank', 'noopener,noreferrer');
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 30px ${COLORS.SECONDARY_ACCENT}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.SECONDARY_ACCENT}40`;
                }}
              >
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  <UserPlus size={18} className="sm:w-5 sm:h-5" />
                </div>
                Register Now
              </button>
            </div>
            
                      </div>

            {/* Right Side Logo */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="relative">
                <img 
                  src="/HackUnitedLogo.webp" 
                  alt="HackUnited Logo" 
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-pulse"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(147, 112, 219, 0.3))' }}
                />
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ 
                    background: `radial-gradient(circle, ${COLORS.PRIMARY_ACCENT}20 0%, transparent 70%)`,
                    animationDuration: '3s'
                  }}
                ></div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
