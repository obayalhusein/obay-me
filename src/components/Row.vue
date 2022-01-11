<template>
    <div :class="classList">
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
        },
        y: {
            type: String,
            default: null
        },
        x: {
            type: String,
            default: null
        },
    },
    data () {
        return {
            classList: ""
        }
    },
    mounted() {
        this.classList += `r ${this.size}`;
        (this.y) ? this.classList += ` y${this.y}`  : '';
        (this.x) ? this.classList += ` x${this.x}`  : '';
        (this.$el.attributes.getNamedItem('reverse')) ?  this.classList += ` rr`  : '';
    },
}
</script>