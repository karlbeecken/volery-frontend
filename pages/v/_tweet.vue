<template>
  <div v-if="tweet">
    <h1 class="title">{{ tweet.name }}</h1>
    <TweetLink />
    <div v-for="prop in tweet.proposals" :key="prop.date">
      <ProposalDisplay :prop="prop" />
    </div>
    <ProposalEditor
      :id="tweet._id"
      :prop="tweet.proposals[tweet.proposals.length - 1]"
    />
  </div>
  <div v-else>
    <h1 class="title">Seems like your link is broken. :(</h1>
    <nuxt-link to="/" class="button">New Tweet</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'center',
  async asyncData({ params, $axios }) {
    const id = params.tweet
    const tweet = await $axios.$get('https://api.volery.app/tweet/' + id)
    return { tweet }
  },
}
</script>

<style></style>
