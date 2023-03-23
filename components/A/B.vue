<template lang="">
  <button @click="aaa">succcc</button>
</template>
<script lang="ts" setup>
const emit = defineEmits<{ (event: "remove", id: number): void }>();
const aaa = () => {
  emit("remove", 1);
  console.log("AAA");
};
onMounted(() => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!");
});
</script>

<style lang=""></style>
