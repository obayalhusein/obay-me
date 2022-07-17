<template>
    <section class="relative">
        <div class="absolute top-0 start-0 w-100 h-100 layer-1">
            <Scene />
        </div>
        <Row y="c" class="relative vh-100 layer-2">
            <Col md="10">
                <h1 class="mb3">
                    Hi,
                    <br>
                    I'm Obay,
                    <br>
                    Front-End Developer
                </h1>
                <p class="mb3" style="max-width: 600px">Creative UI/UX Designer for websites and Mobile Apps, skilled Front-End Developer, focusing on the quality in the first place.</p>
                <div>
                    <Button link="/projects" text="See Work" />
                    &nbsp;
                    <Button link="/pdf/Obay Alhusein - Front-End Developer resume.pdf" target="_blank" text="Show Resume" secondary />
                </div>
            </Col>
        </Row>
    </section>
</template>

<script>
import Scene from '@/components/three/Scene'

export default {
    name: 'Intro',
    components: { Scene },
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: calc(3vw + 1rem);
}
</style>