<template>
  <div>
    <div v-for="prop in tweet.proposals.slice().reverse()" :key="prop.date">
      <div class="box mt-3">
        <p>{{ prop.text }}</p>
        <b-tag class="mt-1">{{ prop.date | formatDate }}</b-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prop'],
  created() {
    this.tweet = this.prop
  },
}
</script>

<style></style>
