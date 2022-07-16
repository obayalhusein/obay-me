<template>
    <component :is="link ? 'g-link' : 'button'" class="btn" :to="link" :class="[setSpacerClass, secondaryClass]">{{ text }}</component>
</template>

<script>
import Spacer from '~/mixin/spacer'

export default {
    name: 'Button',
    mixins: [Spacer],
    props: {
        text: String,
        link: String,
        secondary: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        secondaryClass() {
            return this.secondary ? 'secondary': '';
        }
    },
}
</script>