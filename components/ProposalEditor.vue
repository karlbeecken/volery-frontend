<template>
  <div class="box mt-5">
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <ValidationProvider
          v-slot="{ errors }"
          name="propText"
          :rules="{ required: true }"
        >
          <b-field :message="errors[0]">
            <b-input
              :value="prop.text"
              type="textarea"
              maxlength="280"
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
  props: ['prop'],
  components: {
    ValidationObserver: ValidationObserver,
    ValidationProvider: ValidationProvider,
  },
}
</script>
