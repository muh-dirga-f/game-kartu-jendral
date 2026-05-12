export function createGameScene() {
  if (!window.THREE || !THREE.Scene) {
    throw new Error('Three.js lokal belum tersedia di www/vendor/three/three.min.js');
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050b14);
  scene.fog = new THREE.FogExp2(0x050b14, 0.015);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 19, 16);
  camera.lookAt(0, -1, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));

  const table = new THREE.Mesh(
    new THREE.CylinderGeometry(10, 10.5, 0.8, 64),
    new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.9, metalness: 0.1 })
  );
  table.receiveShadow = true;
  scene.add(table);

  const renderLoop = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(renderLoop);
  };
  renderLoop();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
