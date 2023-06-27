<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>PostView for {{ route.params.id }}</div>
</template>

<style scoped></style>