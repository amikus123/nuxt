<template>
  <LayoutNavbar />
  <main>
    <NuxtPage />
  </main>
  {{ [user] }}
  <LayoutFooter />
</template>

<script setup>
const { initializeUser } = useAuth();
initializeUser();
</script>
<style lang=""></style>
