<template>
    <form V-on:submit.prevent="submitForm">
      <b-field label="Name" label-position="on-border">
        <b-input 
          v-model="tweetName"
        ></b-input>
      </b-field>
      <b-field label="Tweet Text" label-position="on-border">
        <b-input
          v-model="tweetText"
          type="textarea"
          maxlength="280"
        ></b-input>
      </b-field>
      <b-field>
        <b-button>New Tweet</b-button>
      </b-field>
      </form>
</template>

<script>
export default {
   data() {
    return {
      tweetName: '',
      tweetText: ''
    }
  },
  methods: {
    submitForm() {
      console.log("baum")
    }
  }
}
</script>