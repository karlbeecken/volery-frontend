<template>
  <div class="box">
    <p>{{ prop.text }}</p>
    <b-tag>{{ prop.date }}</b-tag>
  </div>
</template>

<script>
export default {
  props: ['prop'],
}
</script>

<style></style>
