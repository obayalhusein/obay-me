<template>
    <div :class="classList">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Col',
    props: {
        xs: {
            type: String,
            default: null
        },
        sm: {
            type: String,
            default: null
        },
        md: {
            type: String,
            default: null
        },
        lg: {
            type: String,
            default: null
        },
        xl: {
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
        this.classList += "c";
        (this.xs) ? this.classList += ` sm${this.xs}`  : '';
        (this.sm) ? this.classList += ` sm${this.sm}`  : '';
        (this.md) ? this.classList += ` md${this.md}`  : '';
        (this.lg) ? this.classList += ` lg${this.lg}`  : '';
        (this.xl) ? this.classList += ` xl${this.xl}`  : '';
    },
}
</script>