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
      </nav>
      <ThemeSelector />
    </header>
</template>

<script>
import Ologo from '@/components/vector/brand/Ologo'
import IconHome from '@/components/vector/icons/rail/IconHome'
import IconAbout from '@/components/vector/icons/rail/IconAbout'
import IconProjects from '@/components/vector/icons/rail/IconProjects'
import IconCase from '@/components/vector/icons/rail/IconCase'
import ThemeSelector from '@/components/common/ThemeSelector'

export default {
    name: 'Rail',
    components: { Ologo, IconHome, IconAbout, IconProjects, IconCase, ThemeSelector },
}
</script>