<template>
    <header id="rail" class="fixed top-0 bottom-0 vh-100 smooth layer-4">
      <nav class="pt5">
        <div class="p2">
          <g-link to="/">
            <Ologo />
          </g-link>
        </div>
        <g-link class="nav-link d-block tc bold p2" to="/">
          <IconHome />
          <small>Home</small>
        </g-link>
        <g-link class="nav-link d-block tc bold p2" to="/about">
          <IconAbout />
          <small>About</small>
        </g-link>
        <g-link class="nav-link d-block tc bold p2" to="/projects">
          <IconProjects />
          <small>Projects</small>
        </g-link>
        <g-link class="nav-link d-block tc bold p2" to="/hire">
          <IconCase />
          <small>Hire Me</small>
        </g-link>
        <div class="relative">
          <div class="nav-link d-block tc bold p2" style="cursor: pointer">
            <IconMagic />
            <small>I'm a Magician</small>
          </div>
          <ThemeTooltip />
        </div>
      </nav>
    </header>
</template>

<script>
import Ologo from '@/components/vector/brand/Ologo'
import IconHome from '@/components/vector/icons/IconHome'
import IconAbout from '@/components/vector/icons/IconAbout'
import IconProjects from '@/components/vector/icons/IconProjects'
import IconCase from '@/components/vector/icons/IconCase'
import IconMagic from '@/components/vector/icons/rail/IconMagic'
import ThemeTooltip from '@/components/ThemeTooltip'

export default {
    name: 'Rail',
    components: { Ologo, IconHome, IconAbout, IconProjects, IconCase, IconMagic, ThemeTooltip },
}
</script>