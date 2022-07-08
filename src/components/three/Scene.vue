<template>
    <canvas :ref="`canvas${this._uid}`"></canvas>
</template>

<script>
import * as THREE from 'three'

export default {
    name: 'Scene',
    mounted () {
        // Canvas
        const canvas = this.$refs[`canvas${this._uid}`]

        // Scene
        const scene = new THREE.Scene()

        // ratio
        const ratio = {
            width: 800,
            height: 600
        }

        // Object
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
        const cubeMaterial = new THREE.MeshBasicMaterial({
            color: '#ff0000'
        })
        const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
        scene.add(cubeMesh)

        // Camera
        const camera = new THREE.PerspectiveCamera(75, ratio.width / ratio.height)
        camera.position.z = 3
        scene.add(camera)

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(ratio.width, ratio.height)
        renderer.render(scene, camera)
    }
}
</script>