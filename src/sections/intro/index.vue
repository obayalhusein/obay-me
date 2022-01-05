<template>
    <div>
        <div>DIV 1</div>
        <Button></Button>
        <div>DIV 2</div>
        <button class="btn">button</button>
        <input type="text" placeholder="Your name">
    </div>
</template>

<script>
import Button from '../../components/Button.vue'

export default {
    name: 'Intro',
    components: {
        Button
    }
}
</script>