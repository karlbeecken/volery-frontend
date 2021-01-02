<template>
  <div>
    <h1 class="title">{{ tweet.name }}</h1>
    <TweetLink />
    <div v-for="prop in tweet.proposals" :key="prop.date">
      <ProposalDisplay :prop="prop" />
    </div>
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
