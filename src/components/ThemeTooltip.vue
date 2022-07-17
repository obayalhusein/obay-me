<template>
    <div class="theme-tooltip absolute bottom-0 end-0 ts ps1">
        <div class="theme-tooltip-body p3">
            <div class="mb3">
                <Button secondary @click.native="setTheme(1)" text="Flat" class="w-100"/>
            </div>
            <div class="mb3">
                <Button secondary @click.native="setTheme(2)" text="Neumoriphism" class="w-100"/>
            </div>
            <div class="mb3">
                <Button secondary @click.native="toggleDarkMode()" text="Toggle Dark" class="w-100"/>
            </div>
        </div>
    </div>
</template>

<script>
import Theme from '~/mixin/theme'

export default {
    name: 'ThemeTooltip',
    mixins: [Theme],
}
</script>