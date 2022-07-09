<template>
    <canvas :ref="`canvas${this._uid}`"></canvas>
</template>

<script>
import * as THREE from 'three'

export default {
    name: 'Scene',
    data () {
        return {
            cursor: { x: 0, y: 0 },
            ratio: { width: window.innerWidth, height: window.innerHeight },
            scene: new THREE.Scene(),
            camera: {},
            renderer: {},
        }
    },
    mounted () {
        // Object
        this.createCube()
        this.createCube()

        // Camera
        this.createCamera()

        // Renderer
        this.resizePage()
        this.render()
    },
    methods: {
        createCube() {
            const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
            const cubeMaterial = new THREE.MeshBasicMaterial({
                color: '#ff0000'
            })
            const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
            this.scene.add(cubeMesh)
        },
        createCamera() {
            this.camera = new THREE.PerspectiveCamera(75 , this.ratio.width / this.ratio.height, 0.1 , 100)
            this.camera.position.z = 3
            this.scene.add(this.camera)
        },
        render() {
            // Canvas
            const canvas = this.$refs[`canvas${this._uid}`]

            // Renderer
            this.renderer = new THREE.WebGLRenderer({canvas})
            this.renderer.setSize(this.ratio.width, this.ratio.height)
            this.renderer.render(this.scene, this.camera)

            // Animation
            this.tick()
        },
        tick() {
            // Render
            this.renderer.render(this.scene, this.camera)

            // Recursion on next frame
            window.requestAnimationFrame(this.tick)
        },
        resizePage() {
            window.addEventListener('resize', () => {
                // Update sizes
                this.ratio.width = window.innerWidth
                this.ratio.height = window.innerHeight
                        
                // Update camera
                this.camera.aspect = this.ratio.width / this.ratio.height
                this.camera.updateProjectionMatrix()
                
                // Update renderer
                this.renderer.setSize(this.ratio.width, this.ratio.height)
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            });
        }
    },
}
</script>