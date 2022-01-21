<template>
    <component :is="link ? 'a' : 'button'" class="btn" :href="link" :class="setSpacer(innerSpace)">
        {{ text }}
    </component>
</template>

<script>
import Spacer from '~/mixin/spacer'

export default {
    name: 'Button',
    props: {
        text: String,
        link: String,
        innerSpace: String
    },
    mixins: [Spacer],
}
</script>