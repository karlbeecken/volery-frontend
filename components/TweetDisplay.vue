<template>
  <section>
    <h1 class="title">{{ tweet.title }}</h1>
    <p>{{ tweet.body }}</p>
  </section>
</template>

<script>
export default {
  props: ['tweet'],
}
</script>

<style></style>
