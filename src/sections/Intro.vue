<template>
    <section>
        <Scene>
        </Scene>
        <Row>
            <Col>
                <h1>Hi, I'm Obay Alhusein</h1>
                <p>Creative UI/UX Designer for websites and Mobile Apps, skilled Front-End Developer, focusing on the quality in the first place.</p>
                <div>
                    <Button text="See Work" />
                    <Button text="Show Resume" />
                </div>
            </Col>
            <Col>
                img
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