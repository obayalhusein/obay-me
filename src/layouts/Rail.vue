<template>
    <header id="rail" class="h-100 smooth">
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
    </header>
</template>

<script>
import Ologo from '@/components/vector/brand/Ologo'
import IconHome from '@/components/vector/icons/IconHome'
import IconAbout from '@/components/vector/icons/IconAbout'
import IconProjects from '@/components/vector/icons/IconProjects'
import IconCase from '@/components/vector/icons/IconCase'

export default {
    name: 'Rail',
    components: { Ologo, IconHome, IconAbout, IconProjects, IconCase },
}
</script>