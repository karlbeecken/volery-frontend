<template>
  <div class="TweetEditor">
    <b-input
      type="textarea"
      class="TweetEditorTextarea"
      :event="event"
      @input="updateValue"
      maxlength="280"
    />
  </div>
</template>

<script>
export default {
  name: 'TweetEditor',
  methods: {
    updateValue(e) {
      this.$emit('event', e)
      console.log(e, e.length)
    },
  },
}
</script>
<style>
.TweetEditorTextarea {
  margin: 1em;
  width: 300px;
}
</style>
