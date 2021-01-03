<template>
  <div class="box media">
    <p class="media-content mt-2" style="white-space: nowrap">
      https://volery.app/v/{{ id }}
    </p>
    <b-button class="media-right" @click="copy">Copy</b-button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    async copy() {
      const url = 'https://volery.app/v/' + this.id
      await this.$copyText(url)
      this.$buefy.toast.open({
        message: 'Copied to Clipboard!',
        type: 'is-success',
      })
    },
  },
}
</script>

<style></style>
