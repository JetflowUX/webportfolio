import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) {
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      120,
    );
    camera.position.set(0, 0.2, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    mountRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const orbGeometry = new THREE.IcosahedronGeometry(2.2, 4);
    const orbMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8eff4a,
      metalness: 0.35,
      roughness: 0.15,
      transmission: 0.28,
      thickness: 0.9,
      transparent: true,
      opacity: 0.26,
      clearcoat: 1,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    orb.position.set(2.5, -0.2, -3);
    group.add(orb);

    const ringGeometry = new THREE.TorusGeometry(3.4, 0.06, 32, 220);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xa3b7ff,
      transparent: true,
      opacity: 0.24,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2.6;
    ring.position.set(-2.2, 1.6, -5);
    group.add(ring);

    const wireGeometry = new THREE.IcosahedronGeometry(1.45, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const wire = new THREE.Mesh(wireGeometry, wireMaterial);
    wire.position.set(-2.9, -1.8, -4);
    group.add(wire);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1200;
    const particleArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particleArray[i] = (Math.random() - 0.5) * 28;
      particleArray[i + 1] = (Math.random() - 0.5) * 18;
      particleArray[i + 2] = (Math.random() - 0.5) * 22;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particleArray, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xa5adc8,
      size: 0.03,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const pointA = new THREE.PointLight(0xb6ff3b, 1.35, 40, 2);
    pointA.position.set(4.2, 2.8, 3.5);
    scene.add(pointA);

    const pointB = new THREE.PointLight(0x5872ff, 0.95, 34, 2);
    pointB.position.set(-5, -2.5, 1.2);
    scene.add(pointB);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      orb.rotation.x = elapsed * 0.17;
      orb.rotation.y = elapsed * 0.22;
      orb.position.y = -0.2 + Math.sin(elapsed * 0.8) * 0.35;

      ring.rotation.z = elapsed * 0.2;
      ring.position.x = -2.2 + Math.sin(elapsed * 0.35) * 0.25;

      wire.rotation.x = -elapsed * 0.16;
      wire.rotation.y = elapsed * 0.23;

      particles.rotation.y = elapsed * 0.014;
      particles.rotation.x = Math.sin(elapsed * 0.08) * 0.08;

      camera.position.x += (mouseX * 0.42 - camera.position.x) * 0.025;
      camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.025;
      camera.lookAt(0, 0, -2.5);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);

      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }

      orbGeometry.dispose();
      orbMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}
