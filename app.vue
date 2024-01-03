<script setup>


onMounted(() => {
  let x = noButton.value.offsetLeft
  let y = noButton.value.offsetTop
  console.log(x, y)
  noButtonStyle.value = `
  position: absolute;
  top: ${y}px;
  left: ${x}px;
`
})


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const onHover = (e) => {
  let x = getRandomArbitrary(0, window.innerWidth - e.target.offsetWidth)
  let y = getRandomArbitrary(0, window.innerHeight - e.target.offsetHeight)
  console.log(x, y)
  noButtonStyle.value = `
  position: absolute;
  top: ${y}px;
  left: ${x}px;
`
}
const onNoClick = (e) => {
  onHover(e)
}
const onYesClick = (e) => {
  gifUrl.value = "https://media.giphy.com/media/vnh5zLtbpFbhe/giphy.gif"
  yesClicked.value = true
}
let noButtonStyle = ref("")
let gifUrl = ref("assets/frieren-sousou-no-frieren.gif")
let yesClicked = ref(false)
let noButton = ref(null)
</script>

<template>
  <div class="h-screen w-full bg-cream flex items-center justify-center flex-col">
    <h1 v-if="!yesClicked" class="text-2xl font-bold text-rose-400 p-1">Wanna be my fwend ?</h1>
    <h1 v-if="yesClicked" class="text-4xl font-bold text-rose-400 p-1">YAY!</h1>
    <div class="h-[28rem] w-[20rem]  flex flex-col">

      <div class="h-full w-full basis-5/6 ">
        <img v-if="!yesClicked" class="h-full w-full rounded" src="assets/frieren-sousou-no-frieren.gif" alt="this slowpoke moves"  width="250" />
        <img v-if="yesClicked" class="h-full w-full rounded" src="assets/frieren-anime.gif" alt="this slowpoke moves"  width="250" />
      </div>
      <div v-if="!yesClicked" class="h-full w-full basis-1/6  flex p-2 gap-2">
        <div class="w-full h-full">
          <button class="btn" @click="onYesClick">YES</button>
        </div>
        <div class="w-full h-full" >
          <button class="btn transition-all " ref="noButton" :style="noButtonStyle" @mousedown="onNoClick" @mouseenter="onHover">NO</button>
        </div>


      </div>
    </div>


  </div>
</template>
<style>
.btn{
  @apply w-36 h-16 bg-pink rounded text-white font-bold
}

</style>