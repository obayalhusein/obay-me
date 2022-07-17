<template>
    <div>
        <svg class="nav-icon icon-projects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.7 110.3">
            <g class="nav-icon-container">
                <rect class="stroke" x="3" y="3" width="119.7" height="104.33" rx="8" ry="8"/>
                <g class="content1">
                    <rect class="stroke" x="18" y="48.3" width="90.7" height="43.67" rx="8" ry="8"/>
                    <line class="stroke" x1="39.8" y1="92" x2="39.8" y2="48.3"/>
                    <line class="stroke" x1="39.8" y1="63" x2="108.7" y2="63"/>
                    <line class="stroke" x1="85.5" y1="92" x2="85.5" y2="63"/>
                    <line class="stroke" x1="62.8" y1="92" x2="62.8" y2="63"/>
                </g>
                <line class="stroke" x1="3" y1="32.3" x2="122.7" y2="32.3"/>
                <line class="stroke line1" x1="17.7" y1="17.7" x2="55" y2="17.7"/>
                <circle class="fill crcl1" cx="78.3" cy="17.7" r="3.7"/>
                <circle class="fill crcl2" cx="93" cy="17.7" r="3.7"/>
                <circle class="fill crcl3" cx="107.7" cy="17.7" r="3.7"/>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'IconProjects',
}
</script>

<style lang="scss">
.nav-link {
    &:hover {
        .nav-icon.icon-projects {
            .content1,
            .line1,
            .crcl1,
            .crcl2,
            .crcl3 {
                animation: icon-element-jump 1s forwards;
            }
            .line1 {animation-delay: .2s}
            .crcl1 {animation-delay: .4s}
            .crcl2 {animation-delay: .6s}
            .crcl3 {animation-delay: .8s}
        }
    }
}
</style>