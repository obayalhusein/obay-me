<template>
    <div class="holder">
        <p>Theme:</p>
        <div><button @click="setTheme(1)">Neumoriphism</button></div>
        <div><button @click="setTheme(0)">Flat</button></div>
        <br>
        <p>Mode:</p>
        <div><button @click="toggleDarkMode()">Toggle Dark</button></div>
    </div>
</template>
<script>
import Theme from '~/mixin/theme'

export default {
    name: "Debugger",
    mixins: [Theme],
}
</script>
<style>
    .holder {
        position: fixed;
        top: 0;
        right: 0;
        background: rgba(0,0,0,.1);
    }
</style>