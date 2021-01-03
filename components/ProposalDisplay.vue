<template>
  <div class="box mt-3">
    <p>{{ prop.text }}</p>
    <b-tag class="mt-1">{{ prop.date | formatDate }}</b-tag>
  </div>
</template>

<script>
export default {
  props: ['prop'],
}
</script>

<style></style>
