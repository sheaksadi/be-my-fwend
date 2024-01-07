<script setup>
import spyFamilyEnding from './assets/spy-family-ending.mp3'
import snowman from './assets/snowman.mp3'


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
  timesTriedToClickNo.value++
}
const onNoClick = (e) => {
  onHover(e)
}

function discord_message(webHookURL, message) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    'content': message,
    'username':'Frieren',
  }));
}
const onYesFwendClick = (e) => {
  gifUrl.value = "https://media.giphy.com/media/vnh5zLtbpFbhe/giphy.gif"
  yesClicked.value = true
  playSound(spyFamilyEnding, true )
  discord_message("https://discord.com/api/webhooks/1192107935011188747/M-iq8cOdreqL0ON3mMMZDTDWA6UuKoG6meJgKmxDv5JsgxFrIjpb85MgpbmveEhYwsCO",
  `you got a fwend yay! :)\nbefore Tried no button ${timesTriedToClickNo.value} times`
  )


}
const playSound = (sound, loop = false, volume = 0.5, onEnd) => {

  let audio = new Audio(sound)
  audio.volume = volume
  audio.loop = loop
  audio.onended = onEnd
  audio.play()

}

const onYesLikeClick = (e) => {
  gifUrl.value = "https://media.giphy.com/media/vnh5zLtbpFbhe/giphy.gif"
  yesClicked.value = true
  likesMe.value = true
  playSound(snowman, true, 0.1 )


  discord_message("https://discord.com/api/webhooks/1192107935011188747/M-iq8cOdreqL0ON3mMMZDTDWA6UuKoG6meJgKmxDv5JsgxFrIjpb85MgpbmveEhYwsCO",
  `someone likes you! :)\nsurprising ik !! \nno button click ${timesTriedToClickNo.value} times`
  )


}

let likeMe = computed(() => {
  return timesTriedToClickNo.value >= 25
})

let timesTriedToClickNo = ref(0)
let noButtonStyle = ref("")
let gifUrl = ref("assets/frieren-sousou-no-frieren.gif")
let yesClicked = ref(false)
let likesMe = ref(false)
let noButton = ref(null)
// let audio = ref(null)
</script>

<template>
  <div class="h-screen w-full bg-cream flex items-center justify-center flex-col">
    <h1 v-if="!yesClicked" class="text-2xl font-bold text-rose-400 p-1">Wanna be my fwend ?</h1>

    <div class="h-[28rem] w-[20rem]  flex flex-col">

      <div class="h-full w-full basis-5/6 ">
        <div class="h-full w-full relative">
          <h1 v-if="yesClicked" class="text-4xl font-bold text-rose-400 p-1 yay ">{{likesMe ? 'AWW U TOO 🫶' : "YAY!" }}</h1>
          <img v-if="!yesClicked" class="h-full w-full rounded img" src="assets/frieren-sousou-no-frieren.gif" alt="a cute elf :)"  width="250" />
          <img v-if="yesClicked" class="h-full w-full rounded img" src="assets/frieren-anime.gif" alt="a cute elf :)"  width="250" />
        </div>

      </div>
      <div v-if="!yesClicked" class="h-full w-full basis-1/6  flex p-2 gap-2">
        <div class="w-full h-full">
          <button class="btn" @click="onYesFwendClick">YES</button>
        </div>
        <div class="w-full h-full" >
          <button class="btn transition-all duration-400 z-20 cursor-none" ref="noButton" :style="noButtonStyle" @mousedown="onNoClick" @mouseenter="onHover">NO</button>
        </div>


      </div>
    </div>
    <div class="absolute top-2 left-2 w-[24rem] h-[8rem] bg-rose-400 rounded flex likeMe" :class="yesClicked ? 'transition-all duration-500 translate-x-[-50rem]' : ''" v-if="likeMe">
      <div class="basis-2/6 p-1">
              <img src="assets/frieren-owo.gif" class="h-full rounded" alt="">
      </div>


      <div class="basis-4/6  h-full flex flex-col" >
        <div class="w-full h-full p-1 basis-4/6">
          <h2 class="text-sm font-bold text-white">why dont you wanna be my fwend :(</h2>
          <h1 class="text-lg font-bold text-white">Do you love me or something?👉👈</h1>
        </div>
        <div class="w-full basis-2/6 h-full flex justify-end items-center px-2">
          <button class="w-20 h-8 bg-green-400 rounded text-white font-bold" @click="onYesLikeClick">YWES</button>
        </div>

      </div>


    </div>
    <h1 class="absolute bottom-0 right-0 text-2xl font-bold text-rose-400"> {{timesTriedToClickNo}}</h1>
  </div>
</template>
<style>
.btn{
  @apply w-36 h-16 bg-pink rounded text-white font-bold
}
.likeMe{
  animation: slideOut 1.2s forwards;
}
.yay{
  animation: popup 0.5s forwards;
  z-index: 0;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.img{
  z-index: 10;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
@keyframes popup {
  0% {

    top: 0;
  }
  70% {

    top: -4rem;
  }
  100% {

    top: -3rem;


  }

}
@keyframes slideOut {
  0% {
    left: -40rem;
  }
  70% {
    left: 2rem;
  }
  100% {
    left: .5rem;
  }

}

</style>