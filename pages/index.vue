<template>
  <div class="container">
    <div>
      <h1 class="title">Volery</h1>
      <b-button type="is-primary" @click="this.submitTweet">New Tweet</b-button>
      <TweetEditor v-on:event="this.updateTweetText" />
    </div>
  </div>
</template>

<script>
import TweetEditor from '@/components/TweetEditor.vue'
import Axios from 'axios'
export default {
  data() {
    return {
      tweet: '',
    }
  },
  name: 'App',
  components: {
    TweetEditor,
  },
  methods: {
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      this.ip = ip
    },
    updateTweetText(value) {
      this.tweet = value
    },
    async submitTweet(e) {
      console.log(this.tweet)
      await this.fetchSomething()
      console.log(this.ip)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
