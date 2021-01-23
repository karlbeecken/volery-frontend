<template>
  <div v-if="tweet">
    <h1 class="title">{{ tweet.name }}</h1>
    <TweetLink :id="tweet._id" />
    <ProposalEditor
      :id="tweet._id"
      :originalProp="tweet.proposals[tweet.proposals.length - 1]"
      v-on:newProp="loadProps"
    />

    <ProposalDisplay :prop="tweet" :key="componentKey" />
  </div>
  <div v-else>
    <h1 class="title">Seems like your link is broken. :(</h1>
    <nuxt-link to="/" class="button">New Tweet</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'center',
  data() {
    return {
      componentKey: 0,
    }
  },
  async asyncData({ params, $axios }) {
    const id = params.tweet
    const tweet = await $axios.$get('https://api.volery.app/tweet/' + id)
    return { id, tweet }
  },
  methods: {
    // doesn't work
    async loadProps() {
      this.tweet = await this.$axios.$get(
        'https://api.volery.app/tweet/' + this.id
      )
      this.componentKey += 1
      console.log(this.componentKey)
    },
  },
}
</script>

<style></style>
