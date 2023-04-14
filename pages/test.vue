<template>
  <div class="prevent-full-width mx-auto flex">
    <client-only>
      <div class="sidebar-container bg-base-500 mr-1 rounded p-2">Hello</div>
      <Child class="settings-container" />
    </client-only>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar-container {
  width: 15rem;
  position: sticky;
  top: 58px;
  align-self: flex-start;
}
.settings-container {
  width: calc(100% - 15rem);
}
</style>
