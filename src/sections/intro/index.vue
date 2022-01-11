<template>
    <section>
        <Row>
            <Col>
                <h1>1</h1>
            </Col>
            <Col>
                <h1>2</h1>
            </Col>
            <Col>
                <h1>3</h1>
            </Col>
        </Row>
    </section>
</template>

<script>
import Button from '~/components/Button.vue'
import Input from '~/components/Input.vue'
import Img from '~/components/Img.vue'
import Row from '~/components/Row.vue'
import Col from '~/components/Col.vue'

export default {
    name: 'Intro',
    components: {
        Button,
        Input,
        Img,
        Row,
        Col,
    },
}
</script>