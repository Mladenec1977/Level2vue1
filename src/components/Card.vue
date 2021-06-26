<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
  props: {
    title: String,
  },
});
</script>

<style>

</style>
