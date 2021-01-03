<template>
  <ValidationObserver v-slot="{ invalid }">
    <form @submit.prevent="onSubmit">
      <ValidationProvider v-slot="{ errors }" name="tweetName" rules="required">
        <b-field label="Tweet Name" :message="errors[0]">
          <b-input v-model="tweetName"></b-input>
        </b-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="tweetText" rules="required">
        <b-field label="Tweet Text" :message="errors[0]">
          <b-input
            v-model="tweetText"
            type="textarea"
            maxlength="280"
          ></b-input>
        </b-field>
      </ValidationProvider>
      <b-field>
        <b-button native-type="submit" :disabled="invalid">New Tweet</b-button>
      </b-field>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },

  data() {
    return {
      tweetName: '',
      tweetText: '',
    }
  },
  methods: {
    onSubmit() {
      const PATH_API = '/tweets'
      this.$axios
        .$post('https://api.volery.app/tweets', {
          name: this.tweetName,
          text: this.tweetText,
        })
        .then(function (response) {
          window.location = 'v/' + response._id
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>
