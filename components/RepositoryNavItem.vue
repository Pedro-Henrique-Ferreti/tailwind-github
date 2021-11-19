<template>
  <li :class="{ 'text-gray-500': !isActive, 'font-semibold': isActive }">
    <a href="#"
      class="flex items-center border-b-2 px-4 pb-3 border-transparent"
      :class="{ 'border-red-400': isActive }"
    >
      <slot />
      <span class="ml-2">{{ text }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'RepositoryNavItem',
  props: {
    text: String,
    isActive: Boolean,
  },
};
</script>

<style scoped>
::v-deep svg {
  @apply w-4 fill-current;
}
</style>
