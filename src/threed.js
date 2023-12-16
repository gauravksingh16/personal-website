document.addEventListener("DOMContentLoaded", function () {
    const canvasContainer = document.querySelector(".threed");
    const canvas = document.getElementById("canvas");

    if (canvasContainer && canvas) {
        const renderer = new THREE.WebGLRenderer({ canvas });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Set up GSAP and ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Load GLB model using GLTFLoader
        const loader = new THREE.GLTFLoader();
        let avatar;

        loader.load("../images/gaurav3d.glb", (gltf) => {
            avatar = gltf.scene;

            // Adjust the initial position and scale of the model as needed
            avatar.scale.set(1, 1, 1);
            avatar.position.set(0, 0, 0);

            scene.add(avatar);

            // Initial animation
            gsap.fromTo(avatar.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, duration: 1, ease: "power2.out" });
        });

        // ScrollTrigger animation
        ScrollTrigger.create({
            trigger: canvasContainer,
            start: "top center",
            end: "bottom center",
            onEnter: () => gsap.to(avatar.position, { x: window.innerWidth / 2, duration: 1, ease: "power2.out" }),
        });

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            // Your custom animation logic here

            renderer.render(scene, camera);
        }

        // Handle window resize
        window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();
    }
});