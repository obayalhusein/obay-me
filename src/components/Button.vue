<template>
    <component :is="link ? 'a' : 'button'" class="btn" :href="link" :class="setSpacerClass">{{ text }}</component>
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