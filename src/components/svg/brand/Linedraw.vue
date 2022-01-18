<template>
    <div>
        <svg viewBox="0 0 1255 310">
            <title>Obay Alhusein</title>
            <path class="linedraw ld1" d="M195.5,582.5c-24.6-10.4-31.5-44-24.2-67.3s27.2-42.7,48.8-55.7,52.3-23.2,74.2-5c45.4,37.9-18.2,116.9-46.5,147.4-41.8,45.1-88.5,39.8-86.3-10.4,0,0,3-78,79-107" transform="translate(-156.4 -406.3)"/>
            <path class="linedraw ld2" d="M387.5,427.5l-74,130.9h0c-.6.8-9.9,13.3-7,23s5.3,2,5.9.3a.6.6,0,0,0,0-.6c-1.2-2.6-8.9-23.5,34.1-49.7,45.4-27.6,8,47,7,49h0c-.7,1-13.4,20-29,19-8-.5-8.3-5.3-6.5-9.9a18.8,18.8,0,0,1,12.6-11.2,118.9,118.9,0,0,1,19.9-3.9c12-1,22-4,39-13s26-19,26-19,19-19,34-13-2.3,33.9-3,35h0c-.7,1-18.6,25.1-34,22s-16.7-11.2-19-25c-2-11.7.9,52.1,46,10.9a.8.8,0,0,1,1.3.9c-1.8,4.9-3.8,13.4,1.7,18.2,7.8,6.8,40.5-18.8,42-20h0c1.3-1.5,32-35.1,31-38s-15.2,25.4-16,26.9v.2c-.4,1.2-4.7,17,2,19.9s24,1,35-16,29-42,29-42l-31,47h0c-.8,1.5-23,45.1-25,50s-30,57-42,72-36,25-45,13,7-38,7-38,20-31,51-34,52,9,59,16" transform="translate(-156.4 -406.3)"/>
            <path class="linedraw ld3" d="M682.5,551.5s-17-10-32,0-30,31-15,52c5.6,7.9,13.6,11.2,21.5,12.4a44.6,44.6,0,0,0,35-10.3c34.3-28.9,149.7-129.2,156.5-175.1,0,0-60,131-52,180,0,0,5-104-94-84" transform="translate(-156.4 -406.3)"/>
            <path class="linedraw ld4" d="M854.5,529.5s26-5,49-49,43-98,5-51-65.6,112.1-68,137,1.8,26.2,7,30c7.5,5.5,29,0,59-36,26.7-32.1,50.3-100,78.5-125.6a1.9,1.9,0,0,1,2.7,2.5c-21.1,27-78,104.1-91.1,161.7a1.8,1.8,0,0,0,3.4,1.2c10.1-20.1,31.8-60.8,44.5-66.8,16.3-7.7,11.5,11.2,11,12.9,0,.1,0,.1-.1.2-1,1.7-15.6,27.5-6.9,44.9s75-68,75-68-43,38-30,70c9.9,24.4,45.4-29.1,61.7-55.9.6-1-.8-1.9-1.4-1-11.7,16.5-29.1,43.1-22.3,47.9,10,7,53-26,58-39,4.1-10.6,10.4-21.5,17.2-22.8a1.4,1.4,0,0,1,.9,2.6c-7.4,3.9-22.3,14.1-13.1,30.2,12,21,16,24,13,34s-22,27-40,17,17-18.7,30-19c17.8-.4,35.6-11.1,43.2-16.3a42.3,42.3,0,0,0,6.1-5.1c8.8-9.1,40.3-40.9,49.7-36.6,11,5,17,18-4,29-17.7,9.3-28.3.8-31.2-2.1a.9.9,0,0,0-1.4.2c-2.3,4.7-10.4,23.1,2.6,30.9,15,9,76.5-21.5,99-57,0,0-38,45-31,66s89-65,89-65-33,30-31,48,34-23,34-23,22-29,19,4-6.2,39.4,6,43c15.5,4.5,59-50,59-50" transform="translate(-156.4 -406.3)"/>
            <line class="linedraw ld5" x1="1118.1" y1="108.2" x2="1134.1" y2="93.2"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Linedraw'
}
</script>

<style scoped>
.linedraw {
  fill:none;
  stroke:#000;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:15px;
}
.ld1 {
  stroke-dasharray: 1000 1000;
  stroke-dashoffset: 1000;
  animation: drawing forwards;
  animation-duration: 1.5s;
  animation-delay: 0s;
}
.ld2 {
  stroke-dasharray: 1400 1400;
  stroke-dashoffset: 1400;
  animation: drawing forwards;
  animation-duration: 2.5s;
  animation-delay: .5s;
}
.ld3 {
  stroke-dasharray: 1000 1000;
  stroke-dashoffset: 1000;
  animation: drawing forwards;
  animation-duration: 1.5s;
  animation-delay: 2.5s;
}
.ld4 {
  stroke-dasharray: 2400 2400;
  stroke-dashoffset: 2400;
  animation: drawing forwards;
  animation-duration: 3.5s;
  animation-delay: 3.5s;
}
.ld5 {
  stroke-dasharray: 50 50;
  stroke-dashoffset: 50;
  animation: drawing forwards;
  animation-duration: 1s;
  animation-delay: 6.5s;
}

@keyframes drawing {
    to {
        stroke-dashoffset:0
    }
}
</style>