<template>
    <footer class="tc pt4 pb3" style="border-top: solid 1px rgba(0,0,0,.1);">
        <Row x="c" class="mb3">
            <a class="media-link mx2" href="#" target="_blank">
                <IconLinkedin />
            </a>
            <a class="media-link mx2" href="#" target="_blank">
                <IconGithub />
            </a>
            <a class="media-link mx2" href="#" target="_blank">
                <IconFacebook />
            </a>
        </Row>
        <div class="mb3">
            <Button link="/hire" text="Hire me!" />
        </div>
        <div>
            Copyright &copy; {{ new Date().getFullYear() }}
        </div>
    </footer>
</template>

<script>
import IconLinkedin from '@/components/vector/icons/socialmedia/IconLinkedin'
import IconGithub from '@/components/vector/icons/socialmedia/IconGithub'
import IconFacebook from '@/components/vector/icons/socialmedia/IconFacebook'

export default {
    name: 'Footer',
    components: { IconLinkedin, IconGithub, IconFacebook },
}
</script>