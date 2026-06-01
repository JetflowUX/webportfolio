const canvas = document.getElementById('scene');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 0, 14);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const ambient = new THREE.AmbientLight(0xa9b7ff, 0.8);
const pointA = new THREE.PointLight(0x87b8ff, 1.6, 50);
pointA.position.set(7, 5, 8);
const pointB = new THREE.PointLight(0xb998ff, 1.1, 40);
pointB.position.set(-8, -3, 6);
scene.add(ambient, pointA, pointB);

const orbGeometry = new THREE.IcosahedronGeometry(1.2, 1);
const orbMaterial = new THREE.MeshStandardMaterial({
  color: 0x5871ff,
  emissive: 0x1b2352,
  roughness: 0.4,
  metalness: 0.85,
  wireframe: true
});

const orbs = Array.from({ length: 6 }, (_, i) => {
  const orb = new THREE.Mesh(orbGeometry, orbMaterial.clone());
  orb.scale.setScalar(0.5 + Math.random() * 1.2);
  orb.position.set((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12, -6 - Math.random() * 8);
  orb.userData = { drift: 0.2 + Math.random() * 0.35, offset: i * 0.7 };
  scene.add(orb);
  return orb;
});

const starsGeometry = new THREE.BufferGeometry();
const starCount = 500;
const starVertices = new Float32Array(starCount * 3);
for (let i = 0; i < starCount; i += 1) {
  const idx = i * 3;
  starVertices[idx] = (Math.random() - 0.5) * 40;
  starVertices[idx + 1] = (Math.random() - 0.5) * 26;
  starVertices[idx + 2] = -Math.random() * 24;
}
starsGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));
const stars = new THREE.Points(
  starsGeometry,
  new THREE.PointsMaterial({ color: 0x93a8ff, size: 0.03, transparent: true, opacity: 0.75 })
);
scene.add(stars);

const pointer = { x: 0, y: 0 };
window.addEventListener('pointermove', (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
});

const cards = [...document.querySelectorAll('.floating-card')];
const clock = new THREE.Clock();

function animate() {
  const t = clock.getElapsedTime();

  camera.position.x += (pointer.x * 0.8 - camera.position.x) * 0.03;
  camera.position.y += (-pointer.y * 0.5 - camera.position.y) * 0.03;
  camera.lookAt(0, 0, -2);

  orbs.forEach((orb, i) => {
    orb.rotation.x += 0.004;
    orb.rotation.y += 0.005;
    orb.position.y += Math.sin(t * orb.userData.drift + orb.userData.offset) * 0.002;
    orb.position.x += Math.cos(t * 0.17 + i) * 0.001;
  });

  stars.rotation.y = t * 0.008;

  cards.forEach((card, i) => {
    const speed = Number(card.dataset.speed) || 1;
    const y = Math.sin(t * speed + i) * 10;
    const rotate = Math.sin(t * speed * 0.5 + i) * 2;
    card.style.transform = `translate3d(0, ${y}px, 0) rotateX(${rotate}deg)`;
  });

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
