<script setup></script>

<template>
  <header>
    <h1 id="brand" class="text-center text-6xl text-primary mb-2">Scribble</h1>
    <RouterLink to="/">Home Page</RouterLink>
    <nav class="flex justify-content-center">
  <RouterLink to="/">EXPLORE</RouterLink>
  <div class="mx-2">|</div>
  <RouterLink to="/create">CREATE</RouterLink>
  <div class="mx-2">|</div>
  <RouterLink to="/post/123">SOME RANDOM POST</RouterLink>
</nav>
  </header>

  <div class="main mx-auto">
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  max-width: 60rem;
}
.router-link-active {
  font-weight: 700;
}
</style>