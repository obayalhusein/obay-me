<template>
    <div class="theme-tooltip absolute bottom-0 end-0 ts ps1 smooth">
        <div class="theme-tooltip-body p3">
            <div class="mb3">
                <p class="mb2">Themes:</p>
                <Radio @click.native="setTheme(1)" class="mb2" name="theme" checked>Flat</Radio>
                <Radio @click.native="setTheme(2)" class="mb2" name="theme">Neumoriphism</Radio>
            </div>
            <div>
                <p class="mb2">Dark mode:</p>
                <Button secondary @click.native="toggleDarkMode()" text="Toggle" class="w-100"/>
            </div>
        </div>
    </div>
</template>

<script>
import Theme from '~/mixin/theme'

export default {
    name: 'ThemeSelectorTooltip',
    mixins: [Theme],
}
</script>