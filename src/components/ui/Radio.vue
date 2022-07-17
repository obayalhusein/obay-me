<template>
    <div class="radio">
        <label>
            <div class="me2">
                <input class="radio-input" type="radio" :name="name" :checked="checked" />
                <div class="radio-icon smooth">
                    <div class="radio-icon-inside absolute smooth"></div>
                </div>
            </div>
            <div>
                <slot />
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: 'Radio',
    props: {
        name: {
            type: String,
            default: ''
        },
        checked: {
            type: Boolean,
            default: false
        },
    },
}
</script>