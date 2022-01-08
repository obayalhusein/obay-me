<template>
    <component :is="link ? 'a' : 'button'" class="btn" :href="link">
        {{ text }}
    </component>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        link: String
    }
}
</script>