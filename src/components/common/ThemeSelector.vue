<template>
    <div :class="{'open': showThemeSelector}" class="theme-selector relative mb5">
        <div @click="showThemeSelector = !showThemeSelector" class="nav-link d-block tc bold p2" style="cursor: pointer">
            <div :class="!showThemeSelector ? 'visible': 'hidden'" class="smooth">
                <IconMagic />
                <small>I'm a Magician</small>
            </div>
            <div :class="showThemeSelector ? 'visible': 'hidden'" class="absolute top-0 start-0 w-100 py4 smooth" style="font-size: 2rem">
                &times;
            </div>
        </div>
        <ThemeSelectorTooltip />
    </div>
</template>

<script>
import IconMagic from '@/components/vector/icons/rail/IconMagic'
import ThemeSelectorTooltip from '@/components/common/ThemeSelectorTooltip'

export default {
    name: 'ThemeSelector',
    components: { IconMagic, ThemeSelectorTooltip },
    data () {
        return {
            showThemeSelector: false,
        }
    },
}
</script>

<style lang="scss">
.theme-selector {
  .theme-tooltip {
      transform: translate(100%, -1rem) scale(0);
      transform-origin: left;
      opacity: 0;
  }
  &.open {
    .theme-tooltip {
        transform: translate(100%, -1rem) scale(1);
        opacity: 1;
    }
  }
}
</style>