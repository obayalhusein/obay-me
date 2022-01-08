<template>
    <component :is="tall ? 'textarea' : 'input'" :value="text">
        {{ (tall) ? text : '' }}
    </component>
</template>

<script>
export default {
    name: 'Input',
    props: {
        text: String,
        tall: String
    }
}
</script>