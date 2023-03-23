<template lang="">
  <p>
    {{ state.count }}
  </p>
  <AB @remove="remove" />
  <button @click="state.count++">asssss</button>
  <Test :count="state.count" />
  <ul>
    <li v-for="(items, index) in items" :key="index">
      {{ items }}
    </li>
  </ul>
</template>
<script setup lang="ts">
interface State {
  count: number;
}

const remove = () => {
  console.log("AAA");
};
</script>
<style lang=""></style>
