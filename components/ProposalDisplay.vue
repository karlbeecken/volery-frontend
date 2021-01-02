<template>
  <div class="tile">
    <p>{{ prop.text }}</p>
    <p class="is-size-1">{{ prop.date }}</p>
  </div>
</template>

<script>
export default {
  props: ['prop'],
}
</script>

<style></style>
