<template>
    <div :class="{'open': showThemeSelector}" class="theme-selector relative mb5">
        <div @click="showThemeSelector = !showThemeSelector" class="nav-link d-block tc bold p2" style="cursor: pointer">
        <IconMagic />
        <small>I'm a Magician</small>
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
            showThemeSelector: true,
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