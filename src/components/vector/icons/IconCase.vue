<template>
    <div>
        <svg class="nav-icon icon-case" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.7 119.3">
            <g class="nav-icon-container">
                <g class="case-bottom">
                    <path class="stroke" d="M1219.3,1209.3h-101a12,12,0,0,1-12-12V1166a12,12,0,0,1,12-12l50.5,9.5,50.5-9.5a12,12,0,0,1,12,12v31.3A12,12,0,0,1,1219.3,1209.3Z" transform="translate(-1098.5 -1093)"/>
                </g>
                <g class="case-hand">
                    <path class="stroke " d="M1177.4,1116.7v-4.9a2.9,2.9,0,0,0-3-3h-11.2a3,3,0,0,0-3,3v4.9h-13.9v-10.8a9.9,9.9,0,0,1,9.9-9.9h25.3a9.8,9.8,0,0,1,9.8,9.9v10.8Z" transform="translate(-1098.5 -1093)"/>
                </g>
                <g class="case-opener">
                    <path class="stroke" d="M1113.5,1153.7l55.3,9.8,55.4-9.8a12,12,0,0,0,12-12v-13a12,12,0,0,0-12-12H1113.5a12,12,0,0,0-12,12v13A12,12,0,0,0,1113.5,1153.7Z" transform="translate(-1098.5 -1093)"/>
                    <rect class="stroke" x="61.5" y="61.7" width="17.7" height="17.67" rx="3" ry="3"/>
                </g>
            </g>
        </svg>
    </div>
</template>

<style lang="scss">
.nav-link {
    &:hover {
        .nav-icon.icon-case {
            .case-hand,
            .case-opener {
                animation: icon-element-jump .6s forwards;
            }
            .case-hand {animation-delay: .2s}
        }
    }
}

@keyframes icon-element-jump {
    50% { transform: translateY(-10px) }
}
</style>