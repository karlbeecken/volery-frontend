<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half"></div>
        <TweetDisplay :tweet="tweetData" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const tweet = params.tweet
    const tweetData = await $axios.$get(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    return { tweetData }
  },
}
</script>

<style></style>
