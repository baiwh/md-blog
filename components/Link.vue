<template>
  <a :class="{ active: isSelected }" :style="{ 'justify-content': flexType }">
    <h3 class="nav-title">{{ title }}</h3>
    <slot />
  </a>
</template>
<style scoped lang="less">
a {
  padding: 3px 10px;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
}

a.active {
  background-color: rgba(100, 148, 237, 0.2);
}
</style>
<script setup>
defineProps(['isSelected', 'title', 'flexType'])
</script>
