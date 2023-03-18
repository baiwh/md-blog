<template>
  <a :class="{ active: pageContext.urlPathname === $attrs.href }">
    <slot />
  </a>
</template>
<style scoped>
a {
  padding: 3px 10px;
}
a.active {
  background-color: rgba(100, 148, 237, 0.2);
}
</style>
<script setup>
import { usePageContext } from '../renderer/usePageContext'
const pageContext = usePageContext()
</script>
