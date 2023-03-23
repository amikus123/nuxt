<template lang="">
  <div>
    {{ count }}
  </div>
</template>
<script setup lang="ts">
const { count } = defineProps<{ count: number }>();
</script>
<style lang=""></style>
