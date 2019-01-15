<template>
  <div>
    <ul>
      <li v-for="person in persons" :key="person">
        person: {{person}}. 
      </li>
    </ul>
    <hr>

    <div class="middle">
      <button @click="ifShow = !ifShow">ifShow</button> 
      <span v-if='ifShow'>control by v-if</span>
      <span v-else>control by v-else</span>
      <span v-show="ifShow">control by v-show</span>
    </div>
    <hr>

    <div v-text="article">It will be replaced</div>
    <div v-html="article">It will be replaced</div>
    <hr>

    <div v-once>
      <input v-model="text1">
      will not change because it is v-once: {{text1}}
    </div>
    <div>
      <input v-model="text2">
      {{text2}}
    </div>
    <hr>

    <ul>
      <li :class="{bg: true}">:class="{bg: true}"</li>
      <li :class="{bg: true, blueCol: true}">
        :class="{bg: true, blueCol: true}"</li>
      <li :class="['bg', 'blueCol', 'aquaBor']">
        :class="['bg', 'blueCol', 'aquaBor']"</li>
      <!-- use fontSize instead of font-size -->
      <li :style="{color:'red', fontSize: '1rem'}">
        :style="{color:'red', fontSize: '1rem'}"
        </li>
    </ul>

    <!--this 的值是 undefined-->
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      persons: ['Bob', 'Jack'],
      ifShow: true,
      article: '<div>I am article</div>',
      text1: 'hello world1',
      text2: 'hello world2'
    }
  }
}
</script>

<style scoped lang="scss">
.middle span{
  border: 1px solid yellow;
}

.bg{
  background-color: rgb(185, 219, 230);
}
.blueCol{
  color: blue;
}
.aquaBor{
  border: 1px solid aqua;
}
</style>
