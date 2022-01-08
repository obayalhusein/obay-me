<template>
    <div :style="{backgroundImage: 'url(' + link + ')', paddingBottom: ratio, backgroundPosition: 'center', backgroundSize: 'cover'}"></div>
</template>

<script>
export default {
    name: 'Img',
    props: {
        text: String,
        link: String,
        ratio: {
            type: String,
            default: '100%'
        }
    }
}
</script>