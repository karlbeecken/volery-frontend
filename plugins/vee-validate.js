import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { is_not } from "vee-validate/dist/rules";

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value)
    };
  },
  computesRequired: true
});

extend('required', {
  ...required,
  message: 'Please fill in.'
});

extend('is_not', {
  ...is_not,
  message: 'You need to change something.'
});
