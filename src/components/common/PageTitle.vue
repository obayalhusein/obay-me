<template>
    <div class="page-title relative p5">
        <h1 class="page-title-text relative layer-1">{{ text }}</h1>
        <div class="page-title-effect absolute top-0 start-0 ps5">
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props:{
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.page-title {
    &-text {
        font-size: calc(6vw + 1rem);
    }
    &-effect {
        font-size: 24vw;
        white-space: nowrap;
        opacity: 0.05;
        pointer-events: none;
    }
}
</style>