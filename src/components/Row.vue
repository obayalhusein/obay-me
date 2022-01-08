<template>
    <div :class="'r rs' + size">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Row',
    props: {
        size: {
            type: String,
            default: 'md'
        }
    }
}
</script>