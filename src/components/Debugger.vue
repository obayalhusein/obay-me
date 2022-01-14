<template>
    <div class="holder">
        <div><button @click="$parent.setTheme(1)">Neumoriphism</button></div>
        <div><button @click="$parent.setTheme(0)">Flat</button></div>
    </div>
</template>
<script>
export default {
    name: "Debugger",
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