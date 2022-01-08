<template>
    <section>
        <Row>
            <Col>
                <h3>1</h3>
            </Col>
            <Col>
                <h3>2</h3>
            </Col>
            <Col>
                <h3>3</h3>
            </Col>
        </Row>
        <Button text="Save" />
        <Input />
        <Img link="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" />
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