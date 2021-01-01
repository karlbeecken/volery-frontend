<template>
  <form>
    <b-field label="Name" label-position="on-border">
      <b-input v-model="tweetName"></b-input>
    </b-field>
    <b-field label="Tweet Text" label-position="on-border">
      <b-input v-model="tweetText" type="textarea" maxlength="280"></b-input>
    </b-field>
    <b-field>
      <b-button @click.prevent="submitForm">New Tweet</b-button>
    </b-field>
  </form>
</template>

<script>
export default {
  data() {
    return {
      tweetName: '',
      tweetText: '',
    }
  },
  methods: {
    submitForm() {
      /* hier uuid generieren */
      function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
          /[xy]/g,
          function (c) {
            var r = (Math.random() * 16) | 0,
              v = c == 'x' ? r : (r & 0x3) | 0x8
            return v.toString(16)
          }
        )
      }
      const id = uuidv4()
      this.id = id
      console.log(this.id + this.tweetName + this.tweetText)
    },
  },
}
</script>
