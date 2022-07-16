<template>
    <component :is="link ? 'g-link' : 'button'" class="btn" :to="link" :class="setSpacerClass">{{ text }}</component>
</template>

<script>
import Spacer from '~/mixin/spacer'

export default {
    name: 'Button',
    props: {
        text: String,
        link: String,
    },
    mixins: [Spacer],
}
</script>