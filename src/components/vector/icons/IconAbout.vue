<template>
    <div>
        <svg class="nav-icon icon-about" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 93.5">
            <g class="nav-icon-container">
                <rect class="stroke" x="3" y="3" width="128" height="87.53" rx="12" ry="12"/>
                <g>
                    <circle class="stroke person-head" cx="44.5" cy="31.6" r="12.4"/>
                    <g class="person-body">
                        <path class="stroke" d="M775,1188.7a27.6,27.6,0,1,0-55.1,0Z" transform="translate(-703 -1117)"/>
                    </g>
                </g>
                <g>
                    <line class="line-1 stroke" x1="87.1" y1="27.8" x2="117.1" y2="27.8"/>
                    <line class="line-2 stroke" x1="87.1" y1="46.8" x2="117.1" y2="46.8"/>
                    <line class="line-3 stroke" x1="87.1" y1="65.8" x2="117.1" y2="65.8"/>
                </g>
            </g>
        </svg>

    </div>
</template>

<script>
export default {
    name: 'IconAbout',
}
</script>


<style lang="scss">
.nav-link {
    &:hover {
        .nav-icon.icon-about {
            .person-head,
            .person-body,
            .line-1,
            .line-2,
            .line-3 {
                animation: icon-element-jump .6s forwards;
            }
            .person-head {animation-delay: .2s}
            .line-2 {animation-delay: .2s}
            .line-1 {animation-delay: .4s}
        }
    }
}

@keyframes icon-element-jump {
    50% { transform: translateY(-10px) }
}
</style>