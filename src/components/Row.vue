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
        noWrap: {
            type: Boolean,
            default: false
        },
    },
    data () {
        return {
            classList: ""
        }
    },
    mounted() {
        this.classList += `r ${this.size}`;
        this.y ? this.classList += ` y${this.y}`  : '';
        this.x ? this.classList += ` x${this.x}`  : '';
        this.noWrap ? this.classList += ' no-wrap' : '';
        this.$el.attributes.getNamedItem('reverse') ?  this.classList += ` rr`  : '';
    },
}
</script>