<template>
  <div class="box mt-5">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <ValidationProvider
          v-slot="{ errors }"
          name="propText"
          :rules="{ required: true, is_not: placeholder }"
        >
          <b-field :message="errors[0]">
            <b-input
              v-model="propText"
              :value="prop.text"
              type="textarea"
              maxlength="280"
              aria-label="New Proposal"
            ></b-input>
          </b-field>
        </ValidationProvider>
        <b-field>
          <b-button native-type="submit" :disabled="invalid" @click="toParent"
            >New Proposal</b-button
          >
        </b-field>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  props: ['prop', 'id'],
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
  data() {
    return {
      propText: [],
    }
  },
  created() {
    ;(this.propText = this.prop.text), (this.placeholder = this.prop.text)
  },
  methods: {
    toParent() {
      this.$emit('newProp')
    },
    onSubmit() {
      this.$axios
        .$post('https://api.volery.app/tweets/' + this.id + '/proposal', {
          text: this.propText,
        })
        .then(function (response) {
          console.log(response)
          window.location.reload(true)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>
