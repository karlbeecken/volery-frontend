<template>
  <div class="box mt-5">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <ValidationProvider
          v-slot="{ errors }"
          name="propText"
          :rules="{ required: true, is_not: originalProp.text }"
        >
          <b-field :message="errors[0]">
            <b-input
              v-model="prop.text"
              type="textarea"
              maxlength="280"
              aria-label="New Proposal"
            ></b-input>
          </b-field>
        </ValidationProvider>
        <b-field>
          <b-button native-type="submit" :disabled="invalid"
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
  props: ['originalProp', 'id'],
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
  data() {
    return {
      prop: { text: ""},
    }
  },
  created() {
    this.prop = Object.assign({},this.originalProp);
  },
  methods: {
    async onSubmit() {
      if (this.prop.text != this.originalProp) {
        await this.$axios
          .$post('https://api.volery.app/tweets/' + this.id + '/proposal', {
            text: this.prop.text,
          })
          .then((response) => this.$emit('newProp'))
          .catch(function (error) {
            console.log(error)
          })
      } else {
        console.log('error')
      }
    },
  },
}
</script>
