<template>
  <div>
    <h1 class="title">{{ tweet.name }}</h1>

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
    const tweet = await $axios.$get(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    return { tweet }
  },
}
</script>

<style></style>
