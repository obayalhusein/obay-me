<template>
    <canvas :ref="`canvas${this._uid}`"></canvas>
</template>

<script>
import * as THREE from 'three'
import Theme from '~/mixin/theme'

export default {
    name: 'Scene',
    mixins: [Theme],
    data () {
        return {
            cursor: { x: 0, y: 0 },
            ratio: { width: 0, height: 0 },
            scene: new THREE.Scene(),
            camera: {},
            renderer: {},
            clock: new THREE.Clock(),
        }
    },
    mounted () {
        // Set viewport ratio
        this.ratio = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        // Object
        this.createCube({
            position: {
                x: -2,
            }
        })
        this.createCube({
            position: {
                x: 0,
            }
        })
        this.createCube({
            position: {
                x: 2,
            }
        })

        // Camera
        this.createCamera()

        // Renderer
        this.resizePage()
        this.render()
    
        // Animation
        this.tick()
    },
    computed: {
        theme() {
            return this.currentTheme;
        }
    },
    watch: {
        theme(newVal, oldVal) {
            // Loop rotation animation
            const meshs = this.scene.children.filter(item => item.isMesh)
            meshs.forEach(mesh => {
                mesh.material.wireframe = this.theme.id == 1
                mesh.material.color.set( this.theme.colors.primary );
            });
        }
    },
    methods: {
        createCube(data) {
            const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
            const cubeMaterial = new THREE.MeshBasicMaterial({color: '#ff0000'})
            const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)

            // Set data
            data.position.x != undefined ? cubeMesh.position.x = data.position.x : null
            data.position.y != undefined ? cubeMesh.position.y = data.position.y : null
            data.position.z != undefined ? cubeMesh.position.z = data.position.z : null

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
            this.renderer.setClearColor( 0xffffff, 0);
            this.renderer.render(this.scene, this.camera)
        },
        tick() {
            // Get time
            const elapsedTime = this.clock.getElapsedTime()

            // Loop rotation animation
            const meshs = this.scene.children.filter(item => item.isMesh)
            meshs.forEach(mesh => {
                mesh.rotation.set(0.1 * elapsedTime, 0.1 * elapsedTime, 0.1 * elapsedTime)
            });

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